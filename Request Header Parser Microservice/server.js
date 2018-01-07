"use strict";
var express = require('express');

var app = express();

var template = {"ipaddress": null, "language": null, "software": null};
app.get('/', (req, res) => {
    template.ipaddress = req.ip; //works on localhost
    //template.ipaddress = req.header('x-forwarded-for').split(',')[0]; works on server
    template.language = req.headers['accept-language'].split(';')[0];
    template.software = req.headers['user-agent'].split(/[()]/)[1];
    res.send(template);
});

app.listen(3000);