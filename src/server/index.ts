import * as express from 'express';
import * as bodyParser from 'body-parser';

import { v1Router } from './api';

// import initialDB from './db/utils/initialDB';

const app = express();

app.set('json spaces', 2);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', v1Router);

app.get('/test', (req, res, next) => {
  res.send({ status: 'ok' });
});

app.listen(8388, () => {
  // tslint:disable-next-line:no-console
  console.log('server start on port 8388');
});

// initialDB();
