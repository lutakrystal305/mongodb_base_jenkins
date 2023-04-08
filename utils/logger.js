const winston = require('@utils/winston');

const logger = {
  verbose: (message) => winston.verbose(message),
  warn: (message) => winston.warn(message),
  error: (message, error) => winston.error(`[ERROR] ${error}: ${message}`),
  info: (message) => winston.info(message),
};

module.exports = logger;
