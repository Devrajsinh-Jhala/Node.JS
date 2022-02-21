const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("This is Home Page");
  } else if (req.url == "/about") {
    res.end("This is About Page");
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1>404 Check the Page URL again!</h1>");
  }
});
// To see this just go to localhost:8000

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to port 8000");
});
