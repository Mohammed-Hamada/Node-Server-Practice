const fs = require('fs');
const path = require('path');

const router = (req, res) => {
  const endpoint = req.url;
  const method = req.method;
  if (req.url == '/' || req.url == '/index.html') {
    const htmlFilePath = path.join(__dirname, '..', 'public', 'index.html');
    console.log(htmlFilePath);
    fs.readFile(htmlFilePath, 'utf8', (error, data) => {
      if (error) {
        serverErrorHandle(res);
      } else {
        res.end(data);
      }
    });
  } else {
    const pageNotFoundErrorPath = path.join(
      __dirname,
      '..',
      'public',
      'html',
      '404.html'
    );
    fs.readFile(pageNotFoundErrorPath, 'utf8', (error, data) => {
      if (error) {
        serverErrorHandle(res);
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  }
};

module.exports = router;
