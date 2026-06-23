const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, I am Nguyen Quang Dung');
};

const server = http.createServer(requestListener);

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = server;
