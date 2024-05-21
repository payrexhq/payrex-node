const BaseService = require('./BaseService');
const RefundEntity = require('../entities/RefundEntity');

function RefundService(client) {
  BaseService.call(this, client);
  this.path = 'refunds';
}

RefundService.prototype.create = function (payload) {
  return this.request({
    path: this.path,
    payload: payload,
    method: 'post',
  }).then(function (response) {
    return new RefundEntity(response);
  });
};

Object.setPrototypeOf(RefundService.prototype, BaseService.prototype);

module.exports = RefundService;
