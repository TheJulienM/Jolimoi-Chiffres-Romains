var express = require('express');
var server = express();
server.listen(8080)

function ConvertArabicNumbersToRomanNumbers(arabicNumber) {
    var rosettaStoneButForArabicAndRomanNumber = {C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
    var romanNumber = "";
    var element;

    for ( element in rosettaStoneButForArabicAndRomanNumber ) {
        while ( arabicNumber >= rosettaStoneButForArabicAndRomanNumber[element] ) {
            romanNumber += element;
            arabicNumber -= rosettaStoneButForArabicAndRomanNumber[element];
        }
    }
    return romanNumber;
}

server.get('/', function(request, response) {
    response.sendFile( __dirname  + '/index.html');
});

server.get('/convertNumber', function(request, response) {
    var numberToConvert = request.query.numberToConvert;
    var numberConverted;
    var resultJson = [];
    if(numberToConvert < 0 || numberToConvert > 100 || numberToConvert % 1 != 0)
    {
        numberConverted = "Votre nombre doit être compris entre 0 et 100 et doit être un nombre entier <br> Your number must be between 0 and 100 and must be an integer";
    }

    else if (numberToConvert == 0)
    {
        numberConverted = "Les Romains n'ont pas de 0 / The Romans don't have 0"
    }

    else
    {
        numberConverted = ConvertArabicNumbersToRomanNumbers(numberToConvert);
    }
    resultJson.push({"numberToConvert" : numberToConvert,"numberConverted":numberConverted})
    response.contentType('application/json');
    response.send(JSON.stringify(resultJson))
});

