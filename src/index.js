const http = require("http");

const port = 3000;
http
  .createServer(function (req, res) {
    const { url } = req;
    if (url === "/") {
      res.writeHead(200);
      res.end("Hello!");
    }

    if (url === "/favicon.ico") {
      res.writeHead(200);
      res.end();
      return;
    }
  })
  .listen(port, () => console.log(`Listening on port ${port}.`));
