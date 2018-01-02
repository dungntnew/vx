'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./umd/vx-marker.production.js');
} else {
  module.exports = require('./umd/vx-marker.development.js');
}
