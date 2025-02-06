function BillingStatementEntity(apiResource) {
  const data = apiResource.data;

  this.id = data.id;
  this.amount = data.amount;
  this.currency = data.currency;
  this.customerId = data.customer_id;
  this.description = data.description;
  this.dueAt = data.due_at;
  this.finalizedAt = data.finalized_at;
  this.billingStatementNumber = data.billing_statement_number;
  this.billingStatementUrl = data.billing_statement_url;
  this.lineItems = data.line_items;
  this.livemode = data.livemode;
  this.metadata = data.metadata;
  this.paymentIntent = data.payment_intent;
  this.statementDescriptor = data.statement_descriptor;
  this.status = data.status;
  this.paymentSettings = data.payment_settings;
  this.customer = data.customer;
  this.createdAt = data.created_at;
  this.updatedAt = data.updated_at;
}

module.exports = BillingStatementEntity;
