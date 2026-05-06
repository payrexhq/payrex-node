const BaseService = require('./BaseService');

const SetupIntentEntity = require('../entities/SetupIntentEntity');

function SetupIntentService(client) {
  BaseService.call(this, client);

  this.path = 'setup_intents';
}

SetupIntentService.prototype.cancel = function (id) {
  return this.request({
    path: `${this.path}/${id}/cancel`,
    method: 'post',
  }).then(function (response) {
    return new SetupIntentEntity(response);
  });
};

SetupIntentService.prototype.create = function (payload) {
  return this.request({
    path: this.path,
    payload: payload,
    method: 'post',
  }).then(function (response) {
    return new SetupIntentEntity(response);
  });
};

SetupIntentService.prototype.retrieve = function (id) {
  return this.request({
    path: `${this.path}/${id}`,
    method: 'get',
  }).then(function (response) {
    return new SetupIntentEntity(response);
  });
};

Object.setPrototypeOf(SetupIntentService.prototype, BaseService.prototype);

module.exports = SetupIntentService;
