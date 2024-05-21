const BaseError = require('./BaseError');

function AuthenticationInvalidError(response) {
  return BaseError.call(this, response, 'AuthenticationInvalidError');
}

Object.setPrototypeOf(
  AuthenticationInvalidError.prototype,
  BaseError.prototype
);

module.exports = AuthenticationInvalidError;
