const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//Adding Controllers
const apiController = require('.\controllers\apiController.js')
const htmlController = require('.\controllers\htmlController.js')

let port = process.env.PORT || 3000;

//Using Middleware
app.use('/assets', express.static(__dirname + '/public'));

//Creating my own Middleware
app.use('/', function(req, res, next) {
    console.log(`Request Url ${req.url}`);
    next();
});

//BodyParser Form
app.get('/', function(req, res) {
    res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet></head><body><h1>Hello World!</h1><form method="POST" action="/person">First name: <input type="text" id = "firstname" name="firstname"/></form></body></html>');
});

app.get('/person/:id', function(req, res) {
    res.send(`<html><head></head><body><h1>Person: ${req.params.id}</h1></body></html>`);
});


htmlController(app);

apiController(app);

app.listen(port);