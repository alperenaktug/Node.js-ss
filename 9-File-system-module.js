let http = require("http");
let fs = require("fs");

let server = http.createServer((request, response) => {
  if (request.url == "/") {
    fs.readFile("index.html", (error, html) => {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(html);
      response.end();
    });
  } else if (request.url == "/blogs") {
    fs.readFile("blogs.html", (error, html) => {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(html);
      response.end();
    });
  } else if (request.url == "/product") {
    fs.readFile("product.html", (error, html) => {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(html);
      response.end();
    });
  } else {
    fs.readFile("404.html", (error, html) => {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(html);
      response.end();
    });
  }
});

server.listen(3002);

console.log("node js server at port 3002");
