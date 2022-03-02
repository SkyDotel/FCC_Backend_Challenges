require('dotenv').config();

var express = require('express');
var app = express();

let obj = {"message": "Hello json"};

app.get('/json', function(req, res) {

    if(process.env.MESSAGE_STYLE ==="uppercase"){
    obj["message"] = obj["message"].toUpperCase();
    res.json(obj);
    }
    else{
    res.json(obj);
    }
})


































 module.exports = app;
