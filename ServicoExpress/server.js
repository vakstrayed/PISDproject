var express = require('express');
app = express(),

require('./src/service/CrimeService')(app)

port = process.env.PORT || 3000;
app.listen(port);

console.log("Application running");
