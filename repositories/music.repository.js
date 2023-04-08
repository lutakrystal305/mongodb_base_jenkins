const MusicModel = require('@root/models/music.model');
const BaseRepository = require('@repository/base.repository');

class MusicRepository extends BaseRepository {
  constructor() {
    super(MusicModel);
  }

  async delete(id) {
    return this._model.deleteOne({ _id: id });
  }

  updateName(id, name) {
    return this._model.findOneAndUpdate(
      { _id: id },
      {
        name,
      },
    );
  }
}

module.exports = MusicRepository;
