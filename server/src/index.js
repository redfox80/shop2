require('babel-polyfill');

import dotenv from 'dotenv';
import express from 'express';
import feathers from '@feathersjs/feathers';
import morgan from 'morgan';
import helmet from 'helmet';
import path from 'path';

dotenv.config();

const app = express(feathers());

app.use(morgan('dev'));
app.use(helmet());

const staticPath = path.join(`${__dirname}`, '..', '..', 'client');
app.use(express.static(staticPath));

app.listen(process.env.PORT);
