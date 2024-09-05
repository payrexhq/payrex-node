const BaseService = require('./BaseService');
const BillingStatementLineItemEntity = require('../entities/BillingStatementLineItemEntity');
const DeletedEntity = require('../entities/DeletedEntity');

function BillingStatementLineItemService(client) {
  BaseService.call(this, client);

  this.path = 'billing_statement_line_items';
}

BillingStatementLineItemService.prototype.create = function (payload) {
  return this.request({
    path: this.path,
    payload: payload,
    method: 'post',
  }).then(function (response) {
    return new BillingStatementLineItemEntity(response);
  });
};

BillingStatementLineItemService.prototype.retrieve = function (id) {
  return this.request({
    path: `${this.path}/${id}`,
    method: 'get',
  }).then(function (response) {
    return new BillingStatementLineItemEntity(response);
  });
};

BillingStatementLineItemService.prototype.update = function (id, payload) {
  return this.request({
    path: `${this.path}/${id}`,
    payload: payload,
    method: 'put',
  }).then(function (response) {
    return new BillingStatementLineItemEntity(response);
  });
};

BillingStatementLineItemService.prototype.delete = function (id) {
  return this.request({
    path: `${this.path}/${id}`,
    method: 'delete',
  }).then(function (response) {
    return new DeletedEntity(response);
  });
};

Object.setPrototypeOf(BillingStatementLineItemService.prototype, BaseService.prototype);

module.exports = BillingStatementLineItemService;
