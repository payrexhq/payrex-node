function Error(error) {
  this.code = error.code;
  this.detail = error.detail;
  this.parameter = error.parameter;
}

module.exports = Error;
