function SetupIntentEntity(apiResource) {
  const data = apiResource.data;

  this.id = data.id;
  this.livemode = data.livemode;
  this.clientSecret = data.client_secret;
  this.nextAction = data.next_action;
  this.paymentMethods = data.payment_methods;
  this.returnUrl = data.return_url;
  this.status = data.status;
  this.usage = data.usage;
  this.customer = data.customer;
  this.description = data.description;
  this.createdAt = data.created_at;
  this.updatedAt = data.updated_at;
}

module.exports = SetupIntentEntity;
