import { format, createLogger, transports } from 'winston';

import configs from '../configs';

// Define the log format
const { combine, timestamp, printf, colorize } = format;

const logFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} - ${level} - ${message}`;
});

// Create logger
const logger = createLogger({
  level: 'info',
  format: combine(timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), logFormat),
  transports: [
    new transports.File({
      level: 'info',
      filename: configs.loggerPath,
    }),
  ],
});

if (process.env.NODE_ENV === 'development') {
  logger.add(
    new transports.Console({
      format: combine(
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        colorize(),
        logFormat
      ),
    })
  );
}

export default logger;
