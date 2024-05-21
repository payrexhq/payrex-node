const BaseService = require('./BaseService');
const PaymentMethodEntity = require('../entities/PaymentMethodEntity');

function PaymentMethodService(client) {
  BaseService.call(this, client);
  this.path = 'payment_methods';
}

PaymentMethodService.prototype.create = function (payload) {
  return this.request({
    path: this.path,
    payload: payload,
    method: 'post',
  }).then(function (response) {
    return new PaymentMethodEntity(response);
  });
};

Object.setPrototypeOf(PaymentMethodService.prototype, BaseService.prototype);

module.exports = PaymentMethodService;
