import { join } from 'path';
import { config } from 'dotenv';

// Load environment variables
const envPath =
  process.env.NODE_ENV === 'development'
    ? join(__dirname, '../../.env.dev')
    : join(__dirname, '../../.env.prod');

config({ path: envPath });

console.log(process.env.MONGODB_URL);

// export default class Configs {
//   static port = process.env.PORT || 3000;
//   static loggerPath = join(__dirname, '../../logs/info.log');
//   static mongodbUrl =
//     process.env.MONGODB_URL || 'mongodb://localhost:27017/link-shortener';
// }

// export default {
//   port: process.env.PORT || 3000,
//   loggerPath: join(__dirname, '../../logs/info.log'),
//   mongodbUrl:
//     process.env.MONGODB_URL || 'mongodb://localhost:27017/link-shortener',
// };

// export default {
//   dbHost: process.env.DB_HOST || 'localhost',
//   dbPort: process.env.DB_PORT || 27017,
//   dbUsername: process.env.DB_USERNAME || 'admin',
//   dbPassword: process.env.DB_PASSWORD || 'password',
// };

import * as appConfig from './appConfig';

export { appConfig };
