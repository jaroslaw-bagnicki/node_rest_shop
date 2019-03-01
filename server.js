const http = require('http');
const app = require('./app');

// Setup server
const server = http.createServer(app);
server.listen(process.env.PORT, () => console.log(`Server listening on port ${process.env.PORT}`));
