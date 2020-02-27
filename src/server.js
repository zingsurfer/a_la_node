import Hapi from 'hapi';

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
server.start(err => {
  if (err) {
    console.error('A wild bug was found!');
  }

  console.log(`Server started at ${server.info.uri}`)
});
