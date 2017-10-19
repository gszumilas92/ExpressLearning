const bodyParser = require('body-parser');

let urlencodedParser = bodyParser.urlencoded({ extended: false });
let jsonParser = bodyParser.json();

module.exports = function(app) {

    //BodyParser Json Usage
    app.post('personjson', jsonParser, function(req,res) {
        res.send('Thank you for json data');
        console.log(req.body.firstname);
    });

    //object body added to request by 'body-parser'
    app.post('/person', urlencodedParser, function(req, res) {
        res.send('Thank you!');
        console.log(req.body.firstname);
    });

    app.get('/api', function(req, res) {
        res.json({ 
            firstname: 'Grzegorz',
            lastname: 'Szumilas'
        });
    });
}