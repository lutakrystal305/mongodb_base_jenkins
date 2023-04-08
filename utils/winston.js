/* eslint-disable no-shadow */
const winston = require('winston');
const path = require('path');

const { combine, timestamp, printf } = winston.format;

const options = {
  file: {
    level: 'info',
    format: winston.format.simple(),
    filename: path.join(__dirname, '../log/app.log'),
    json: true,
    colorize: false,
  },
  console: {
    level: 'error',
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.simple(),
    ),
    json: false,
    colorize: true,
  },
};

const myFormat = printf(
  ({ level, message, timestamp }) => `${timestamp}] ${level}: ${message}`,
);

const logger = winston.createLogger({
  format: combine(timestamp(), myFormat),
  transports: [
    new winston.transports.Console(options.console),
    new winston.transports.File(options.file),
  ],
});

module.exports = logger;
