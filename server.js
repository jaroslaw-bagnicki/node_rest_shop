const http = require('http');
const config = require('./config');
const app = require('./app');

// Setup server
const server = http.createServer(app);
server.listen(config.PORT, () => console.log(`Server listening on port ${config.PORT}`));
