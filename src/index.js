const http = require("http");

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
  .listen(3000, () => console.log("Listening on port 3000."));
