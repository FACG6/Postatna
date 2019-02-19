'use strict';
const http = require("http");
const router = require("./router.js");
const port = process.env.PORT || 3000;
const localhost = process.env.localhost || 'localhost';
const server = http.createServer(router);
server.listen(port, () => {
    console.log(`server is listening on ${localhost} :${port}`);
});
