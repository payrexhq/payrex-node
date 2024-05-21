const axios = require('axios');

const ApiResource = require('./ApiResource');

function HttpClient(apiKey, baseUrl) {
  this.apiKey = apiKey;
  this.baseUrl = baseUrl;
}

HttpClient.prototype.request = async function ({ path, method, payload }) {
  const url = `${this.baseUrl}/${path}`;

  const auth = {
    username: this.apiKey,
    password: '',
  };

  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
  };

  let data = null;
  if (method === 'post' || method === 'put') {
    data = JSON.stringify(payload);
  }

  const response = await axios.request({
    method: method,
    url: url,
    auth: auth,
    headers: headers,
    data: data,
  });

  // TODO: Implement error handling

  return new ApiResource(response.data);
};

module.exports = HttpClient;
