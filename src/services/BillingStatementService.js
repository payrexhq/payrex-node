const BaseService = require('./BaseService');
const BillingStatementEntity = require('../entities/BillingStatementEntity');
const DeletedEntity = require('../entities/DeletedEntity');
const ListingEntity = require('../entities/ListingEntity');
const ApiResource = require('../ApiResource');

function BillingStatementService(client) {
  BaseService.call(this, client);

  this.path = 'billing_statements';
}

BillingStatementService.prototype.create = function (payload) {
  return this.request({
    path: this.path,
    payload: payload,
    method: 'post',
  }).then(function (response) {
    return new BillingStatementEntity(response);
  });
};

BillingStatementService.prototype.retrieve = function (id) {
  return this.request({
    path: `${this.path}/${id}`,
    method: 'get',
  }).then(function (response) {
    return new BillingStatementEntity(response);
  });
};

BillingStatementService.prototype.list = function (payload) {
  return this.request({
    path: this.path,
    payload: payload,
    method: 'get',
  }).then(function (response) {
    const sessionsData = response.data.data;

    const data = sessionsData.map((session) => {
      const apiResource = new ApiResource(session);

      return new BillingStatementEntity(apiResource);
    });

    return new ListingEntity(data, response.data.has_more);
  });
};

BillingStatementService.prototype.update = function (id, payload) {
  return this.request({
    path: `${this.path}/${id}`,
    payload: payload,
    method: 'put',
  }).then(function (response) {
    return new BillingStatementEntity(response);
  });
};

BillingStatementService.prototype.delete = function (id) {
  return this.request({
    path: `${this.path}/${id}`,
    method: 'delete',
  }).then(function (response) {
    return new DeletedEntity(response);
  });
};

BillingStatementService.prototype.finalize = function (id) {
  return this.request({
    path: `${this.path}/${id}/finalize`,
    method: 'post',
  }).then(function (response) {
    return new BillingStatementEntity(response);
  });
};

BillingStatementService.prototype.send = function (id) {
  return this.request({
    path: `${this.path}/${id}/send`,
    method: 'post',
  }).then(function () {
    return null;
  });
};

BillingStatementService.prototype.void = function (id) {
  return this.request({
    path: `${this.path}/${id}/void`,
    method: 'post',
  }).then(function (response) {
    return new BillingStatementEntity(response);
  });
};

BillingStatementService.prototype.markUncollectible = function (id) {
  return this.request({
    path: `${this.path}/${id}/mark_uncollectible`,
    method: 'post',
  }).then(function (response) {
    return new BillingStatementEntity(response);
  });
};

Object.setPrototypeOf(BillingStatementService.prototype, BaseService.prototype);

module.exports = BillingStatementService;
