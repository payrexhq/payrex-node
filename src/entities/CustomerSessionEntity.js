function CustomerSessionEntity(apiResource) {
  const data = apiResource.data;

  this.id = data.id;
  this.customerId = data.customer_id;
  this.clientSecret = data.client_secret;
  this.livemode = data.livemode;
  this.components = data.components;
  this.expired = data.expired;
  this.expiredAt = data.expired_at;
  this.createdAt = data.created_at;
  this.updatedAt = data.updated_at;
}

module.exports = CustomerSessionEntity;
