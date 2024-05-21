function PaymentIntentEntity(apiResource) {
  data = apiResource.data;

  this.id = data.id;
  this.resource = data.resource;
  this.amount = data.amount;
  this.captureType = data.capture_type;
  this.clientSecret = data.client_secret;
  this.currency = data.currency;
  this.description = data.description;
  this.livemode = data.livemode;
  this.metadata = data.metadata;
  this.latestPayment = data.latest_payment;
  this.paymentMethodId = data.payment_method_id;
  this.paymentMethods = data.payment_methods;
  this.status = data.status;
  this.nextAction = data.next_action;
  this.returnUrl = data.return_url;
  this.captureBeforeAt = data.capture_before_at;
  this.createdAt = data.created_at;
  this.updatedAt = data.updated_at;
}

module.exports = PaymentIntentEntity;
