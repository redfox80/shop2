"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));

var _express = _interopRequireDefault(require("express"));

var _feathers = _interopRequireDefault(require("@feathersjs/feathers"));

var _morgan = _interopRequireDefault(require("morgan"));

var _helmet = _interopRequireDefault(require("helmet"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('babel-polyfill');

_dotenv.default.config();

const app = (0, _express.default)((0, _feathers.default)());
app.use((0, _morgan.default)('dev'));
app.use((0, _helmet.default)());

const staticPath = _path.default.join(`${__dirname}`, '..', '..', 'client');

app.use(_express.default.static(staticPath));
app.listen(process.env.PORT);