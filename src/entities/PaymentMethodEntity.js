function PaymentMethodEntity(apiResource) {
  const data = apiResource.data;

  this.id = data.id;
  this.type = data.type;
  this.details = data.details;
  this.billingDetails = data.billing_details;
  this.livemode = data.livemode;
  this.metadata = data.metadata;
  this.allowRedisplay = data.allow_redisplay;
  this.createdAt = data.created_at;
  this.updatedAt = data.updated_at;
}

module.exports = PaymentMethodEntity;
