function ValueUnexpectedError(message) {
  const error = new Error(message);
  error.name = ValueUnexpectedError.name;

  return error;
}

module.exports = ValueUnexpectedError;
