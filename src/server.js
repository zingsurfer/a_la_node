import Hapi from 'hapi';

const env = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[env];
const db = require('knex')(config);

const init = async () => {
  // Create a new server instance & attach a new connection to it
  const server = new Hapi.Server({
    host: 'localhost',
    port: 8080
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      return 'Welcome!'
    }
  });

  server.route({
    method: 'GET',
    path: '/api/v1/icecreams',
    handler: async (request, h) => {
      try {
        const icecreams = await db.select().table('icecreams');
        return h.response(icecreams).code(200)
      } catch(e) {
        return h.response(e).code(500);
      }
    }
  })

  // Start the server
  await server.start();

  console.log(`Amazing server started at ${server.info.uri}`)
}

process.on('unhandledRejection', (err) => {
  console.error('A wild bug was found!');
  process.exit(1);
});

init();
