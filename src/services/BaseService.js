const HttpClient = require('../HttpClient');

function BaseService(client) {
  this.httpClient = new HttpClient(
    client.config.apiKey,
    client.config.apiBaseUrl
  );
}

BaseService.prototype.request = function ({ path, method, payload = null }) {
  return this.httpClient.request({
    method: method,
    path: path,
    payload: payload,
  });
};

module.exports = BaseService;
