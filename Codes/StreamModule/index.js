const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  var fs = require("fs");
  //   fs.readFile("input.txt", function (err, data) {
  //     if (err) return console.log(err);
  //     res.end(data.toString());
  //   });

  // 2nd way
  const readableStream = fs.createReadStream("input.txt", "utf-8");
  //   readableStream.on("data", (chunk) => {
  //     res.write(chunk);
  //   });
  //   readableStream.on("end", () => {
  //     res.end();
  //   });
  //   readableStream.on("error", () => {
  //     res.end("File not found!");
  //   });

  // 3rd way

  // res is the destination
  readableStream.pipe(res);
});

server.listen(8000, "127.0.0.1");
