const logger = require('@utils/logger');
const MusicRepository = require('@repository/music.repository');

class MusicService {
  constructor() {
    this.repository = new MusicRepository();
  }

  getAll() {
    try {
      return this.repository.getAll();
    } catch (err) {
      logger.error('Fuck you', err);
    }
  }

  getById(id) {
    try {
      return this.repository.getById(id);
    } catch (err) {
      logger.error('Fuck you', err);
    }
  }

  delete(id) {
    try {
      this.repository.delete(id);
    } catch (err) {
      logger.error('DMMMM', err);
    }
  }
}

module.exports = MusicService;
