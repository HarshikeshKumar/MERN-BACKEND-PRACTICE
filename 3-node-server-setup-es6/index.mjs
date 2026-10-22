import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to the HOME Page");
  } else if (req.url === "/hello") {
    res.end("World");
  } else if (req.url === "/name") {
    res.end("My Name Is HARSHIKESH KUMAR");
  } else if (req.url === "/learn") {
    res.end("Learning How to Create a Node Server");
  } else {
    res.end("Page Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server is Running at PORT: 3000");
});
