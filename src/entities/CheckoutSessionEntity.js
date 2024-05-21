function CheckoutSessionEntity(apiResource) {
  const data = apiResource.data;

  this.id = data.id;
  this.resource = data.resource;
  this.customerReferenceId = data.customer_reference_id;
  this.clientSecret = data.client_secret;
  this.status = data.status;
  this.currency = data.currency;
  this.lineItems = data.line_items;
  this.livemode = data.livemode;
  this.url = data.url;
  this.paymentIntent = data.payment_intent;
  this.metadata = data.metadata;
  this.successUrl = data.success_url;
  this.cancelUrl = data.cancel_url;
  this.paymentMethods = data.payment_methods;
  this.captureType = data.capture_type;
  this.description = data.description;
  this.submitType = data.submit_type;
  this.expiresAt = data.expires_at;
  this.createdAt = data.created_at;
  this.updatedAt = data.updated_at;
}

module.exports = CheckoutSessionEntity;
