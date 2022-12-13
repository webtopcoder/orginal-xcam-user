/* eslint-disable no-console */
import next from 'next';
import express from 'express';
import { resolve } from 'path';
import routes from './routes';

require('dotenv').config({ path: resolve(process.cwd(), '.env') });

const port = parseInt(process.env.PORT || '8081', 10);
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  const expressApp = express();
  expressApp.disable('x-powered-by');
  expressApp.use(handler).listen(port);

  console.log(`> Server listening at http://localhost:${port} as ${dev ? 'development' : process.env.NODE_ENV}`);
})
  .catch((e) => {
    console.log('Something went wrong: ', e);
    process.exit();
  });
