"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));

var _express = _interopRequireDefault(require("express"));

var _feathers = _interopRequireDefault(require("@feathersjs/feathers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('babel-polyfill');

_dotenv.default.config();

const app = (0, _express.default)((0, _feathers.default)());
app.use('/', (req, res) => {
  res.send('Hey ohh!');
});
app.listen(8080);