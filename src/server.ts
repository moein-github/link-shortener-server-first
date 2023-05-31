import express from 'express';

import configs from './configs';
import { logger } from './utils';

async function bootstrap() {
  const app = express();
  const port = configs.port || 8000;

  app.listen(port, () => logger.info(`Server runnnig on port ${port}`));
}

bootstrap();
