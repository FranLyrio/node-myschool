import 'reflect-metadata';

import express from 'express';
import router from './routes/index';

import '@shared/infra/database';

const app = express();

app.use(express.json());
app.use(router);

app.listen(3333, () => {
  console.log('Server is running on 3333');
});