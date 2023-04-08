class BaseRepository {
  constructor(model) {
    this._model = model;
  }

  getAll() {
    return this._model.find();
  }

  getById(id) {
    return this._model.findById(id);
  }

  create(item) {
    return this._model.create(item);
  }
}

module.exports = BaseRepository;
