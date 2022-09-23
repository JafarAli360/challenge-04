const http = require("http");
const fs = require("fs");

const HOST = "localhost";
const PORT = 8080;

http
  .createServer((req, res) => {
    switch (req.url) {
      case "/":
        req.url = "index.html";
        break;
      case "/cars":
        req.url = "SearchCars.html";
        break;
    }
    let path = "public/" + req.url;
    fs.readFile(path, (err, data) => {
      res.writeHead(200);
      res.end(data);
    });
  })

  .listen(PORT, HOST, () => {
    console.log(`Server mu sudah siap diakses, silahkan klik http://${HOST}:${PORT}`);
  });
