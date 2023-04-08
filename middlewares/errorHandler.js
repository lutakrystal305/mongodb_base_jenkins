/* eslint-disable no-unused-vars */
const logger = require('@utils/logger');

const errorHandler = (err, req, res, next) => {
  const { statusCode, message } = err;

  const response = {
    code: statusCode || 500,
    message,
  };

  logger.error('API Error', message);

  res.status(statusCode || 500).send(response);
};

module.exports = { errorHandler };
