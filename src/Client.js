const Config = require('./Config');
const services = require('./services');

function initializeServices(client) {
  for (const service in services) {
    if (Object.prototype.hasOwnProperty.call(services, service)) {
      client[service] = new services[service](client);
    }
  }
}

function Client(apiKey) {
  this.config = new Config(apiKey);
  initializeServices(this);

  return this;
}

module.exports = Client;
