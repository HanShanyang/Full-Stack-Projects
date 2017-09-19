import http from 'http';
// var http = require('http');

var PORT = 8080;

var server = http.createServer((req, res) => {
    res.end(`It Works!! Path Hit: ${req.url}`);
});

server.listen(PORT, function() {
    console.log('Server listening on: http://localhost: %s', PORT);
});