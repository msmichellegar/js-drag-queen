const dragName = require('./drag-name');

module.exports = {
  home: (request, reply) => {
    reply.file('./public/index.html');
  },

  generate: (request, reply) => {
    const name = dragName.generate();

    dragName.generate()
      .then(name => {
        return reply(name)
          .type('text/plain');
      })
  }
};
