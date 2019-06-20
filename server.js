var express = require("express");
var path = require("path");
var app = express(); //                     Initialize the express app 
var PORT = process.env.PORT || 3000; //     create a port

// Set up body parsing and static middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

// Start the server on the port
app.listen(PORT, function () {
    console.log('server.js is listening on PORT: ' + PORT);
});