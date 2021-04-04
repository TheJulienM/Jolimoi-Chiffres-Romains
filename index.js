var express = require('express');
var bodyParser = require("body-parser");
var server = express();
server.use(bodyParser.urlencoded({ extended: true }));
server.listen(8080)

server.get('/', function(request, response) {
    response.sendFile( __dirname  + '/index.html');
});

server.get('/convertNumber', function(request, response) {
    response.write("Test route");
    response.end()
});

