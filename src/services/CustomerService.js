const BaseService = require('./BaseService');
const CustomerEntity = require('../entities/CustomerEntity');
const DeletedEntity = require('../entities/DeletedEntity');
const ListingEntity = require('../entities/ListingEntity');
const ApiResource = require('../ApiResource');

function CustomerService(client) {
  BaseService.call(this, client);

  this.path = 'customers';
}

CustomerService.prototype.create = function (payload) {
  return this.request({
    path: this.path,
    payload: payload,
    method: 'post',
  }).then(function (response) {
    return new CustomerEntity(response);
  });
};

CustomerService.prototype.retrieve = function (id) {
  return this.request({
    path: `${this.path}/${id}`,
    method: 'get',
  }).then(function (response) {
    return new CustomerEntity(response);
  });
};

CustomerService.prototype.list = function (payload) {
  return this.request({
    path: this.path,
    payload: payload,
    method: 'get',
  }).then(function (response) {
    const sessionsData = response.data.data;

    const data = sessionsData.map((session) => {
      const apiResource = new ApiResource(session);

      return new CustomerEntity(apiResource);
    });

    return new ListingEntity(data, response.data.has_more);
  });
};

CustomerService.prototype.update = function (id, payload) {
  return this.request({
    path: `${this.path}/${id}`,
    payload: payload,
    method: 'put',
  }).then(function (response) {
    return new CustomerEntity(response);
  });
};

CustomerService.prototype.delete = function (id) {
  return this.request({
    path: `${this.path}/${id}`,
    method: 'delete',
  }).then(function (response) {
    return new DeletedEntity(response);
  });
};

Object.setPrototypeOf(CustomerService.prototype, BaseService.prototype);

module.exports = CustomerService;
