const Hapi = require('hapi');
const Inert = require('inert');
const routes = require('./src/routes.js');

const server = new Hapi.Server();

server.register(Inert, () => {
  server.connection({
    port: process.env.PORT || 8080
  });

  server.route(routes);

  server.start(() => {
    console.log('Server running at: ' + server.info.uri + '!');
  });
});

module.exports = server;
