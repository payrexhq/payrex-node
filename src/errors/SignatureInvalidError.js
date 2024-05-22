function SignatureInvalidError(message) {
  const error = new Error(message);
  error.name = SignatureInvalidError.name;

  return error;
}

module.exports = SignatureInvalidError;
