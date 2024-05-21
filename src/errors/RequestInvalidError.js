const BaseError = require('./BaseError');

function RequestInvalidError(response) {
  return BaseError.call(this, response, 'RequestInvalidError');
}

Object.setPrototypeOf(RequestInvalidError.prototype, BaseError.prototype);

module.exports = RequestInvalidError;
