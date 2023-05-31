import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import { Express, urlencoded, json } from 'express';
import morgan from 'morgan';

export default (app: Express) => {
  // Set middlewares
  app.use(helmet());
  app.use(compression());
  app.use(json());
  app.use(urlencoded({ extended: false }));
  app.use(cors());
  if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

  app.get('/', (req, res) => res.json({ message: 'hello world' }));
};
