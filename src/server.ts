import express from 'express';

import loader from './loader';
import configs from './configs';
import { logger } from './utils';

// Initialize server
async function bootstrap() {
  const app = express();
  const port = configs.port;

  // Load app & db
  await loader(app);

  // Listening to the desired port
  app.listen(port, () => logger.info(`Server runnnig on port ${port}`));
}

bootstrap();
