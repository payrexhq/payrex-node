function PaymentEntity(apiResource) {
  const data = apiResource.data;

  this.id = data.id;
  this.amount = data.amount
  this.amountRefunded = data.amount_refunded
  this.billing = data.billing
  this.currency = data.currency
  this.description = data.description
  this.fee = data.fee
  this.livemode = data.livemode
  this.metadata = data.metadata
  this.netAmount = data.net_amount
  this.paymentIntentId = data.payment_intent_id
  this.status = data.status
  this.customer = data.customer
  this.paymentMethod = data.payment_method
  this.refunded = data.refunded
  this.createdAt = data.created_at;
  this.updatedAt = data.updated_at;
}

module.exports = PaymentEntity;
