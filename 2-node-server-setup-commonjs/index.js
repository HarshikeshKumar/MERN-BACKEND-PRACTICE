const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(req.url);
  // res.end("This is Home Page");

  if (req.url == "/") {
    res.end("Welcome to my Home page");
  } else if (req.url == "/hello") {
    res.end("Hello Page");
  } else if (req.url == "/name") {
    res.end("My name is Gaurav Singh");
  } else if (req.url == "/friend") {
    res.end("My Friend name is Saurav Shahi");
  } else {
    res.end("Page Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server is running at PORT: 3000");
});
