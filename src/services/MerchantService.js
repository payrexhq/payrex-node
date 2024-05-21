const BaseService = require('./BaseService');
const MerchantEntity = require('../entities/MerchantEntity');

function MerchantService(client) {
  BaseService.call(this, client);
  this.path = 'merchants';
}

MerchantService.prototype.create = function (payload) {
  return this.request({
    path: this.path,
    payload: payload,
    method: 'post',
  }).then(function (response) {
    return new MerchantEntity(response);
  });
};

Object.setPrototypeOf(MerchantService.prototype, BaseService.prototype);

module.exports = MerchantService;
