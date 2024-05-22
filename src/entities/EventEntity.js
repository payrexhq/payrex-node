function EventEntity(apiResource) {
  const data = apiResource.data;

  this.id = data.id;
  this.data = data.data;
  this.type = data.type;
  this.pendingWebhooks = data.pending_webhooks;
  this.previousAttributes = data.previous_attributes;
  this.createdAt = data.created_at;
  this.updatedAt = data.updated_at;
}

module.exports = EventEntity;
