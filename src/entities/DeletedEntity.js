function DeletedEntity(apiResource) {
  const data = apiResource.data;

  this.id = data.id;
  this.deleted = data.deleted;
}

module.exports = DeletedEntity;
