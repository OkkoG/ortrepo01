const http = require("http");

const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
  res.WriteHead(200);
  res.end("My first Server!")
};

const server = http.CreateServer(requestListener);

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
