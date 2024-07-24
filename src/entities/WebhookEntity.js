function WebhookEntity(apiResource) {
  const data = apiResource.data;

  this.id = data.id;
  this.secretKey = data.secret_key;
  this.status = data.status;
  this.description = data.description;
  this.livemode = data.livemode;
  this.url = data.url;
  this.events = data.events;
  this.createdAt = data.created_at;
  this.updatedAt = data.updated_at;
}

module.exports = WebhookEntity;
