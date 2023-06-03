import express from 'express';

import loader from './loader';
import { appConfig } from './configs';
import { logger } from './utils';

// Initialize server
async function bootstrap() {
  const app = express();
  const port = appConfig.port;

  // Load app & db
  await loader(app);

  // Listening to the desired port
  app.listen(port, () => {
    logger.info(`App mode is (${process.env.NODE_ENV})`);
    logger.info(`Server runnnig on port (${port})`);
  });
}

bootstrap();
