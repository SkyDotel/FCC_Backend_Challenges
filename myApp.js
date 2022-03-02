

var express = require('express');
var app = express();

app.get('/name',
    function(req, res){
        var firstname = req.query.first;
        var lastname = req.query.last;
        res.json({"name": `${firstname} ${lastname}` });
    }
);


































 module.exports = app;
