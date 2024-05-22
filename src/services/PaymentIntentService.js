const BaseService = require('./BaseService');
const PaymentIntentEntity = require('../entities/PaymentIntentEntity');

function PaymentIntentService(client) {
  BaseService.call(this, client);
  this.path = 'payment_intents';
}

PaymentIntentService.prototype.capture = function (id, payload) {
  return this.request({
    path: `${this.path}/${id}/capture`,
    payload: payload,
    method: 'post',
  }).then(function (response) {
    return new PaymentIntentEntity(response);
  });
};

PaymentIntentService.prototype.create = function (payload) {
  return this.request({
    path: this.path,
    payload: payload,
    method: 'post',
  }).then(function (response) {
    return new PaymentIntentEntity(response);
  });
};

PaymentIntentService.prototype.retrieve = function (id) {
  return this.request({
    path: `${this.path}/${id}`,
    method: 'get',
  }).then(function (response) {
    return new PaymentIntentEntity(response);
  });
};

Object.setPrototypeOf(PaymentIntentService.prototype, BaseService.prototype);

module.exports = PaymentIntentService;
