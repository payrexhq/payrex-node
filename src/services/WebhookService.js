const BaseService = require('./BaseService');
const WebhookEntity = require('../entities/WebhookEntity');
const ListingEntity = require('../entities/ListingEntity');
const ApiResource = require('../ApiResource');

function WebhookService(client) {
  BaseService.call(this, client);
  this.path = 'webhooks';
}

WebhookService.prototype.create = function (payload) {
  return this.request({
    path: this.path,
    payload: payload,
    method: 'post',
  }).then(function (response) {
    return new WebhookEntity(response);
  });
};

WebhookService.prototype.update = function (id, payload) {
  return this.request({
    path: `${this.path}/${id}`,
    payload: payload,
    method: 'put',
  }).then(function (response) {
    return new WebhookEntity(response);
  });
};

WebhookService.prototype.list = function (payload) {
  return this.request({
    path: this.path,
    payload: payload,
    method: 'get',
  }).then(function (response) {
    const sessionsData = response.data.data;

    const data = sessionsData.map((session) => {
      const apiResource = new ApiResource(session);

      return new WebhookEntity(apiResource);
    });

    return new ListingEntity(data, response.data.has_more);
  });
};

WebhookService.prototype.retrieve = function (id) {
  return this.request({
    path: `${this.path}/${id}`,
    method: 'get',
  }).then(function (response) {
    return new WebhookEntity(response);
  });
};

WebhookService.prototype.enable = function (id) {
  return this.request({
    path: `${this.path}/${id}/enable`,
    method: 'post',
  }).then(function (response) {
    return new WebhookEntity(response);
  });
};

WebhookService.prototype.disable = function (id) {
  return this.request({
    path: `${this.path}/${id}/disable`,
    method: 'post',
  }).then(function (response) {
    return new WebhookEntity(response);
  });
};

WebhookService.prototype.delete = function (id) {
  return this.request({
    path: `${this.path}/${id}`,
    method: 'delete',
  }).then(function (response) {
    return new WebhookEntity(response);
  });
};

Object.setPrototypeOf(WebhookService.prototype, BaseService.prototype);

module.exports = WebhookService;
