// Create a server in NODE practice

const http = require("http");

const routes = require("./routes");

const server = http.createServer(routes.myHandler);
console.log(routes.someText);

server.listen(3000);
