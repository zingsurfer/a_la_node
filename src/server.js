import Hapi from 'hapi';

// Create a new server instance
const server = new Hapi.Server();

// Attach a new connection to it
server.connection( {
  port: 8080
})
