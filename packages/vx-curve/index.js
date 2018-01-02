'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./umd/vx-curve.production.js');
} else {
  module.exports = require('./umd/vx-curve.development.js');
}
