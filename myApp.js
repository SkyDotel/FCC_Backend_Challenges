const bodyParser= require('body-parser');

var express = require('express');
var app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/public',
        express.static(__dirname + "/public"));

app.get('/', function(req, res){
            res.sendFile(__dirname + "/views/index.html")});

app.post('/name',
    function(req, res){
        var firstname = req.body.first;
        var lastname = req.body.last;
        res.json({"name": `${firstname} ${lastname}` });
    }
);


































 module.exports = app;
