const BaseService = require('./BaseService');
const PaymentIntentEntity = require('../entities/PaymentIntentEntity');

function PaymentIntentService(client) {
  BaseService.call(this, client);
  this.path = 'payment_intents';
}

PaymentIntentService.prototype.retrieve = function(id) {
  return this.request({
    path: `${this.path}/${id}`,
    method: 'get',
  }).then(function(response) {
    return new PaymentIntentEntity(response);
  });
};

Object.setPrototypeOf(PaymentIntentService.prototype, BaseService.prototype);

module.exports = PaymentIntentService;
