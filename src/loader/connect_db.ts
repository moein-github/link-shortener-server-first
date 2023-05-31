import { connect } from 'mongoose';

import configs from '../configs';
import { logger } from '../utils';

export default async () => {
  try {
    const url = configs.mongodbUrl;
    await connect(url);
    logger.info(`db connected to ${url}`);
  } catch (err) {
    logger.error(err);
    logger.error('Database could not be connected');
    process.exit(1);
  }
};
