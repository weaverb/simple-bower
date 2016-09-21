var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.type('text/plain');
    res.send('simple rest api');
});

app.get('/packages/:name', function(req, res){
    if(req.params.name.length === 0){
        res.statusCode = 404;
        return res.send('Error 404: invalid package');
    }

    var bowerPackage = {
        "name" : req.params.name,
        "url" : "git@somerepo.com/" + req.params.name + ".git"
    };
    res.type('application/json');
    res.json(bowerPackage);
});

app.listen(process.env.PORT || 4730);