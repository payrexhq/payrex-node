const axios = require('axios');

const ApiResource = require('./ApiResource');
const RequestInvalidError = require('./errors/RequestInvalidError');
const AuthenticationInvalidError = require('./errors/AuthenticationInvalidError');
const ResourceNotFoundError = require('./errors/ResourceNotFoundError');
const BaseError = require('./errors/BaseError');
const Parameter = require('./helpers/Parameter');

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
    data = Parameter.encode(payload);
  }

  try {
    const response = await axios.request({
      method: method,
      url: url,
      auth: auth,
      headers: headers,
      data: data,
    });

    return new ApiResource(response.data);
  } catch (error) {
    if (error.response === undefined) {
      throw new Error(error);
    }

    if (error.response.status === 400) {
      throw new RequestInvalidError(error.response.data);
    } else if (error.response.status === 401) {
      throw new AuthenticationInvalidError(error.response.data);
    } else if (error.response.status === 404) {
      throw new ResourceNotFoundError(error.response.data);
    } else {
      throw new BaseError(error.response.data);
    }
  }
};

module.exports = HttpClient;
