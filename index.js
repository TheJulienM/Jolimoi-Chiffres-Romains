var express = require('express');
var bodyParser = require("body-parser");
var server = express();
server.use(bodyParser.urlencoded({ extended: true }));
server.listen(8080)

server.get('/', function(request, response) {
    response.sendFile( __dirname  + '/index.html');
});

server.get('/convertNumber', function(request, response) {
    var numberToConvert = request.query.arabicNumber;
    var numberConverted;
    var resultJson = [];
    if(numberToConvert < 0 || numberToConvert > 100 || numberToConvert % 1 != 0)
    {
        numberConverted = "Votre nombre doit être compris entre 0 et 100 et doit être un nombre entier (sans virgule)";
    }

    else if (numberToConvert == 0)
    {
        numberConverted = "Les Romains n'ont pas de 0."
    }

    else
    {
        numberConverted = numberToConvert;
    }
    resultJson.push({"numberToConvert" : numberToConvert,"numberConverted":numberConverted})
    response.contentType('application/json');
    response.send(JSON.stringify(resultJson))
});

