/*var http = require('http');

var server = http.createServer();
server.on('request', function(request, response) {
    response.write('Hello world!');
    response.end();
});
server.listen(9000);*/

/*var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    fs.readFile('index.html', function(err, data) {
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    })
}).listen(8080);*/

/*var http = require('http');

var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/hello') {
        response.write('<h1>Hello World!</h1>');
            response.end();
    } else {
            response.statusCode = 404;
            response.write('<h1>404: Zła ścieżka!</h1>');
            response.end();
    }
});

server.listen(8080);*/

var http = require('http');
var fs = require('fs');
var server = http.createServer();

server.on('request', function(request, response) {

    if (request.method === 'GET' && request.url === '/') {
        fs.readFile('index.html', 'utf-8', function(err, data) {
            if (err) throw err;
            response.statusCode = 200;
            response.setHeader("Content-Type", "text/html; charset = utf-8");
            response.write(data);
            response.end();
        })
    } else {
        fs.readFile('error404.jpg', function(err, data) {
            if (err) throw err;
            response.statusCode = 404;

            response.setHeader('Content-Type', 'image/jpg');
            response.write(data);
            response.end();
        });
    }

});
server.listen(8080);