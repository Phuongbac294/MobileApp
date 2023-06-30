var http = require('http').
http.createServer(function (req, res, next) {
    res.write('<h1 style="color:green>Hello node </h1>');
    res.end();
}).listen(8080);