function BillingStatementLineItemEntity(apiResource) {
  const data = apiResource.data;

  this.id = data.id;
  this.unitPrice = data.unit_price;
  this.quantity = data.quantity;
  this.billingStatementId = data.billing_statement_id;
  this.description = data.description;
  this.livemode = data.livemode;
  this.createdAt = data.created_at;
  this.updatedAt = data.updated_at;
}

module.exports = BillingStatementLineItemEntity;
