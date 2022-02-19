const path = require('path');
const fs = require('fs');
const serverErrorHandle = require('./serverErrorHandle');

const pageNotFoundHandle = (res) => {
  const pageNotFoundPath = path.join(
    __dirname,
    '..',
    '..',
    'public',
    'html',
    '404.html'
  );
  fs.readFile(pageNotFoundPath, 'utf8', (error, data) => {
    if (error) {
      serverErrorHandle(res);
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
};
module.exports = pageNotFoundHandle;
