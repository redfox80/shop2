require('babel-polyfill');

import dotenv from 'dotenv';
import express from 'express';
import feathers from '@feathersjs/feathers';

dotenv.config();

const app = express(feathers());

app.use('/', (req, res) => {
	res.send('Hey ohh!');
});

app.listen(8080);