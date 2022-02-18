const fs = require('fs');
const path = require('path');

const router = (req, res) => {
  const endpoint = req.url;
  const method = req.method;
  if (req.url == '/' || req.url == '/index.html') {
    const htmlFilePath = path.join(__dirname, '..', 'public/index.html');
    console.log(htmlFilePath);
    fs.readFile(htmlFilePath, 'fmkadfmla', (error, data) => {
      if (error) {
        console.log(error);
      } else {
        res.end(data);
      }
    });
  } else {
    res.end('Hamada');
  }
};

module.exports = router;
