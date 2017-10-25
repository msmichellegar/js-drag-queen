const handlers = require('./handlers.js');

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: handlers.home
  },
  {
    method: 'GET',
    path: '/generate',
    handler: handlers.generate
  },
  {
    method: 'GET',
    path: '/static/{path*}',
    handler:  {
      directory: {
        path: './'
      }
    }
  }
];
