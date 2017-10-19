const bodyParser = require('body-parser');
let jsonParser = bodyParser.json();

module.exports = function(app) {
    
    //REST api Example (rest is just a code structure)
    app.get('/api/person/:id', function(req, res) {
        //get data from the database
    });

    app.post('/api/person/', jsonParser, function(req, res) {
        //save to the database
    });

    app.delete('/api/person/:id', function(req, res) {
        //delete from the database
    });

}