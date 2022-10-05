// import { http } from "node:http";
const http = require("node:http");
const fs = require("fs");
const port = process.env.PORT || 3000;

// // Create an HTTP server
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("content-type", "text/html");
//   // res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end("<h1>This is a HTTP demo.</h1><p>This is just for practice</p>");
// });

// Create an HTTP server
const server = http.createServer((req, res) => {
  // res.writeHead(200, { "Content-Type": "text/html" });
  res.setHeader("content-type", "text/html");
  console.log("request URL: ", req.url);

  if (req.url == "/") {
    res.statusCode = 200;
    res.end("<h1>This is the main page.</h1><p>Page for /</p>");
  } else if (req.url == "/about") {
    res.statusCode = 200;
    res.end("<h1>This is the about page.</h1><p>Page for about</p>");
  } else if (req.url == "/html") {
    res.statusCode = 200;
    const data = fs.readFileSync("index.html");
    res.end(data.toString());
  } else {
    res.statusCode = 404;
    res.end("<h1>Not Found</h1><p>Page for not found</p>");
  }
});

server.listen(port, () => {
  console.log(`server is listening to port ${port}`);
});
