'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./umd/vx-drag.production.js');
} else {
  module.exports = require('./umd/vx-drag.development.js');
}
