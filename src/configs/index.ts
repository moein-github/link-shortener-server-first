import { join } from 'path';
import { config } from 'dotenv';

// Load environment variables
const envPath =
  process.env.NODE_ENV === 'development'
    ? join(__dirname, '../../.env.dev')
    : join(__dirname, '../../.env.prod');

config({ path: envPath });

export default {
  port: process.env.PORT,
  loggerPath: join(__dirname, '../../logs/info.log'),
};
