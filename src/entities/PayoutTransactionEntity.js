function PayoutTransactionEntity(apiResource) {
  const data = apiResource.data;

  this.id = data.id;
  this.amount = data.amount;
  this.netAmount = data.net_amount;
  this.transactionType = data.transaction_type;
  this.transactionId = data.transaction_id;
  this.createdAt = data.created_at;
  this.updatedAt = data.updated_at;
}

module.exports = PayoutTransactionEntity;
