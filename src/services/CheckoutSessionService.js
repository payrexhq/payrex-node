const BaseService = require('./BaseService');
const CheckoutSessionEntity = require('../entities/CheckoutSessionEntity');
const ListingEntity = require('../entities/ListingEntity');
const ApiResource = require('../ApiResource');

function CheckoutSessionService(client) {
  BaseService.call(this, client);
  this.path = 'checkout_sessions';
}

CheckoutSessionService.prototype.create = function (payload) {
  return this.request({
    path: this.path,
    payload: payload,
    method: 'post',
  }).then(function (response) {
    return new CheckoutSessionEntity(response);
  });
};

CheckoutSessionService.prototype.expire = function (id, payload) {
  return this.request({
    path: `${this.path}/${id}/expire`,
    payload: payload,
    method: 'post',
  }).then(function (response) {
    return new CheckoutSessionEntity(response);
  });
};

CheckoutSessionService.prototype.list = function (payload) {
  return this.request({
    path: this.path,
    payload: payload,
    method: 'get',
  }).then(function (response) {
    const sessionsData = response.data.data;

    const data = sessionsData.map((session) => {
      const apiResource = new ApiResource(session);

      return new CheckoutSessionEntity(apiResource);
    });

    return new ListingEntity(data, response.data.has_more);
  });
};

CheckoutSessionService.prototype.retrieve = function (id) {
  return this.request({
    path: `${this.path}/${id}`,
    method: 'get',
  }).then(function (response) {
    return new CheckoutSessionEntity(response);
  });
};

Object.setPrototypeOf(CheckoutSessionService.prototype, BaseService.prototype);

module.exports = CheckoutSessionService;
