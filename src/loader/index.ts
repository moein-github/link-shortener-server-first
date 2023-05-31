import { Express } from 'express';

import express from './express';
import connect_db from './connect_db';

export default async (app: Express) => {
  // Load express app
  express(app);

  // Connect to db
  await connect_db();
};
