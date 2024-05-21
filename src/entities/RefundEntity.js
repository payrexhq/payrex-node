function RefundEntity(apiResource) {
  const data = apiResource.data;

  this.id = data.id;
  this.resource = data.resource;
  this.amount = data.amount;
  this.currency = data.currency;
  this.livemode = data.livemode;
  this.status = data.status;
  this.description = data.description;
  this.reason = data.reason;
  this.remarks = data.remarks;
  this.paymentId = data.payment_id;
  this.metadata = data.metadata;
  this.createdAt = data.created_at;
  this.updatedAt = data.updated_at;
}

module.exports = RefundEntity;
