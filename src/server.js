const http = require('http');
const fs = require('fs');
const router = require('./router');
require('env2')('.env');

const PORT = process.env.PORT || 8080;

http.createServer(router).listen(PORT, () => {
  console.log(`SERVER RUNNING ON http://localhost:${PORT}`);
});
