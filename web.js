var express = require('express'),
fs = require("fs");

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var fileContents = "";
    fs.readFileSync("index.html", function(err, data){
	fileContents = data;
    });
    response.send(fileContents);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
