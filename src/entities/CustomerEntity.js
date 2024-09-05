function CustomerEntity(apiResource) {
  const data = apiResource.data;

  this.id = data.id;
  this.billingStatementPrefix = data.billing_statement_prefix;
  this.currency = data.currency;
  this.email = data.email;
  this.livemode = data.livemode;
  this.name = data.name;
  this.metadata = data.metadata;
  this.nextBillingStatementSequenceNumber = data.next_billing_statement_sequence_number;
  this.createdAt = data.created_at;
  this.updatedAt = data.updated_at;
}

module.exports = CustomerEntity;
