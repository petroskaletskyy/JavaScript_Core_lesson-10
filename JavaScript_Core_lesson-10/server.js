var express = require("express");
var bodyParser = require("body-parser");

var server = express();

server.use(express.static(__dirname));
server.use(bodyParser.urlencoded({ 
    extended: true
}));
server.use(bodyParser.json());

server.get("/", function (request, response) {
    console.log('Server started!');
});

server.get("/userGet", function (request, response) {
    console.log(request.query);
    var obg = request.query;
    console.log(obg.userFirstName += '.validatedByGet');
    console.log(obg.userLastName += '.validatedByGet');
    console.log(obg.userAge += '.validatedByGet');
    console.log(obg.userAddress += '.validatedByGet');
    response.send('Data :' + JSON.stringify(obg));
    console.log('Data is loaded GET method');
});

server.post("/userPost", function (request, response) {
    console.log(request.body);
    var obg = request.body;
    console.log(obg.userFirstName += '.validatedByGet');
    console.log(obg.userLastName += '.validatedByGet');
    console.log(obg.userAge += '.validatedByPOST');
    console.log(obg.userAddress += '.validatedByPOST');
    response.send('Data :' + JSON.stringify(obg));
    console.log('Data is loaded POST method');
});

server.listen(3000);
