const logger = require('@utils/logger');

class BaseService {
  static async getAll() {
    try {
      if (+Date.now() % 2 === 0) {
        logger.infor('Successeed');
      } else {
        throw new Error();
      }
      const prs = new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 3000);
      });
      await prs;
      return 'akakakaa';
    } catch (Err) {
      logger.error('Fuck you', 'Odd');
    }
  }
}

module.exports = BaseService;
