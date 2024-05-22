const PayrexError = require('../Error');

function BaseError(response, className = 'BaseError') {
  const baseError = new Error();
  baseError.name = className;
  baseError.errors = (response.errors || []).map(
    (error) => new PayrexError(error)
  );

  return baseError;
}

module.exports = BaseError;
