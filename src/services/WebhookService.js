const crypto = require('crypto');
const BaseService = require('./BaseService');
const WebhookEntity = require('../entities/WebhookEntity');
const DeletedEntity = require('../entities/DeletedEntity');
const ListingEntity = require('../entities/ListingEntity');
const ApiResource = require('../ApiResource');
const EventEntity = require('../entities/EventEntity');
const ValueUnexpectedError = require('../errors/ValueUnexpectedError');
const SignatureInvalidError = require('../errors/SignatureInvalidError');

function WebhookService(client) {
  BaseService.call(this, client);
  this.path = 'webhooks';
}

WebhookService.prototype.create = function (payload) {
  return this.request({
    path: this.path,
    payload: payload,
    method: 'post',
  }).then(function (response) {
    return new WebhookEntity(response);
  });
};

WebhookService.prototype.update = function (id, payload) {
  return this.request({
    path: `${this.path}/${id}`,
    payload: payload,
    method: 'put',
  }).then(function (response) {
    return new WebhookEntity(response);
  });
};

WebhookService.prototype.list = function (payload) {
  return this.request({
    path: this.path,
    payload: payload,
    method: 'get',
  }).then(function (response) {
    const webhooksData = response.data.data;

    const data = webhooksData.map((session) => {
      const apiResource = new ApiResource(session);

      return new WebhookEntity(apiResource);
    });

    return new ListingEntity(data, response.data.has_more);
  });
};

WebhookService.prototype.retrieve = function (id) {
  return this.request({
    path: `${this.path}/${id}`,
    method: 'get',
  }).then(function (response) {
    return new WebhookEntity(response);
  });
};

WebhookService.prototype.enable = function (id) {
  return this.request({
    path: `${this.path}/${id}/enable`,
    method: 'post',
  }).then(function (response) {
    return new WebhookEntity(response);
  });
};

WebhookService.prototype.disable = function (id) {
  return this.request({
    path: `${this.path}/${id}/disable`,
    method: 'post',
  }).then(function (response) {
    return new WebhookEntity(response);
  });
};

WebhookService.prototype.delete = function (id) {
  return this.request({
    path: `${this.path}/${id}`,
    method: 'delete',
  }).then(function (response) {
    return new DeletedEntity(response);
  });
};

WebhookService.prototype.parseEvent = function (
  payload,
  signatureHeader,
  webhookSecretKey
) {
  if (typeof signatureHeader !== 'string') {
    throw new ValueUnexpectedError('The signature must be a string.');
  }

  const signatureArray = signatureHeader.split(',');

  if (signatureArray.length < 3) {
    throw new ValueUnexpectedError(
      `The format of signature ${signatureHeader} is invalid.`
    );
  }

  const timestamp = signatureArray[0].split('=')[1];
  const testModeSignature = signatureArray[1].split('=')[1];
  const liveModeSignature = signatureArray[2].split('=')[1];

  const comparisonSignature = liveModeSignature || testModeSignature;

  const computedHash = crypto
    .createHmac('sha256', webhookSecretKey)
    .update(`${timestamp}.${payload}`)
    .digest('hex');

  if (computedHash !== comparisonSignature) {
    throw new SignatureInvalidError('The signature is invalid.');
  }

  const apiResource = new ApiResource(JSON.parse(payload));

  return new EventEntity(apiResource);
};

Object.setPrototypeOf(WebhookService.prototype, BaseService.prototype);

module.exports = WebhookService;
