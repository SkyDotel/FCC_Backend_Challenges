

var express = require('express');
var app = express();

app.get('/:word/echo',
    function(req, res){
        const {word} = req.params;
        res.json({"echo": word});
    }
);


































 module.exports = app;
