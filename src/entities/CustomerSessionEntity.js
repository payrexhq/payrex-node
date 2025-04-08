function CustomerSessionEntity(apiResource) {
  const data = apiResource.data;

  this.id = data.id;
  this.customerId = data.customer_id;
  this.clientSecret = data.client_secret;
  this.merchantId = data.merchant_id;
  this.livemode = data.livemode;
  this.paymentIntentId = data.payment_intent_id;
  this.components = data.components;
  this.createdAt = data.created_at;
  this.updatedAt = data.updated_at;
}

module.exports = CustomerSessionEntity;
