function MerchantEntity(apiResource) {
  const data = apiResource.data;

  this.id = data.id;
  this.resource = data.resource;
  this.connectionType = data.connection_type;
  this.livemode = data.livemode;
  this.createdAt = data.created_at;
  this.updatedAt = data.updated_at;
}

module.exports = MerchantEntity;
