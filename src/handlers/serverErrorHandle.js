const path = require('path');
const fs = require('fs');

const serverErrorHandle = (res) => {
  const serverErrorPath = path.join(
    __dirname,
    '..',
    '..',
    'public',
    'html',
    '500.html'
  );
  fs.readFile(serverErrorPath, 'utf8', (error, data) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
};

module.exports = serverErrorHandle;
