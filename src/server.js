import Hapi from 'hapi';

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

  // Start the server
  await server.start();

  console.log(`Amazing server started at ${server.info.uri}`)
}

process.on('unhandledRejection', (err) => {
  console.error('A wild bug was found!');
  process.exit(1);
});

init();
