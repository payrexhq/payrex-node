function PayoutEntity(apiResource) {
  const data = apiResource.data;

  this.id = data.id;
  this.amount = data.amount;
  this.destination = data.destination;
  this.livemode = data.livemode;
  this.netAmount = data.net_amount;
  this.status = data.status;
  this.createdAt = data.created_at;
  this.updatedAt = data.updated_at;
}

module.exports = PayoutEntity;
