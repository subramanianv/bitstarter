var fs=require('fs')

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  contents=fs.readFileSync('index.html');
      
  response.send(contents.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
