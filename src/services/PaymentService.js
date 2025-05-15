const BaseService = require('./BaseService');
const PaymentEntity = require('../entities/PaymentEntity');

function PaymentService(client) {
  BaseService.call(this, client);
  this.path = 'payments';
}

PaymentService.prototype.retrieve = function (id) {
  return this.request({
    path: `${this.path}/${id}`,
    method: 'get',
  }).then(function (response) {
    return new PaymentEntity(response);
  });
};

Object.setPrototypeOf(PaymentService.prototype, BaseService.prototype);

module.exports = PaymentService;
