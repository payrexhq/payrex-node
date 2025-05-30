const BaseService = require('./BaseService');
const PayoutTransactionEntity = require('../entities/PayoutTransactionEntity');
const ListingEntity = require('../entities/ListingEntity');
const ApiResource = require('../ApiResource');

function PayoutService(client) {
  BaseService.call(this, client);

  this.path = 'payouts';
}

PayoutService.prototype.listTransactions = function (id, payload) {
  return this.request({
    path: `${this.path}/${id}/transactions`,
    payload: payload,
    method: 'get',
  }).then(function (response) {
    const responseData = response.data.data;

    const data = responseData.map((row) => {
      const apiResource = new ApiResource(row);

      return new PayoutTransactionEntity(apiResource);
    });

    return new ListingEntity(data, response.data.has_more);
  });
};

Object.setPrototypeOf(PayoutService.prototype, BaseService.prototype);

module.exports = PayoutService;
