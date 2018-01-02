'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./umd/vx-pattern.production.js');
} else {
  module.exports = require('./umd/vx-pattern.development.js');
}
