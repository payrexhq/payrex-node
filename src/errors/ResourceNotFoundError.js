const BaseError = require('./BaseError');

function ResourceNotFoundError(response) {
  return BaseError.call(this, response, 'ResourceNotFoundError');
}

Object.setPrototypeOf(ResourceNotFoundError.prototype, BaseError.prototype);

module.exports = ResourceNotFoundError;
