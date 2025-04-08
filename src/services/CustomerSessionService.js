const BaseService = require('./BaseService');
const CustomerSessionEntity = require('../entities/CustomerSessionEntity');
const ApiResource = require('../ApiResource');

function CustomerSessionService(client) {
  BaseService.call(this, client);
  this.path = 'customer_sessions';
}

CustomerSessionService.prototype.create = function (payload) {
  return this.request({
    path: this.path,
    payload: payload,
    method: 'post',
  }).then(function (response) {
    return new CustomerSessionEntity(response);
  });
};

CustomerSessionService.prototype.retrieve = function (id) {
  return this.request({
    path: `${this.path}/${id}`,
    method: 'get',
  }).then(function (response) {
    return new CustomerSessionEntity(response);
  });
};

Object.setPrototypeOf(CustomerSessionService.prototype, BaseService.prototype);

module.exports = CustomerSessionService;
