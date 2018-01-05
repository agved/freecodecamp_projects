"use strict";
var express = require('express');
var url = require('url');
var dateFormat = require('dateformat');

var app = express();
var template = {"unix": null, "natural": null};

app.all(/\d/, (req, res) => {
    var date = new Date(decodeURI(url.parse(req.url).pathname));
    if(isNaN(date)) {
        template.unix = null;
        template.natural = null;
        res.send(template);
    }
    else
    {
        template.unix = Date.parse(date);
        template.natural = dateFormat(date, "longDate");
        res.send(template);
    }
});


app.listen(3000, () => {console.log("Server is listening")});