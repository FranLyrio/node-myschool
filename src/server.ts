import 'reflect-metadata';

import express from 'express';
import router from './shared/routes/index';

import './shared/database';

const app = express();

app.use(express.json());
app.use(router);

app.listen(3333, () => {
  console.log('Server is running on 3333');
});