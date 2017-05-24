var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {
  console.log(request.url);
  fs.readFile('./index.html', 'utf8', function(err, fileContents){
    response.end(fileContents);
  })
});

server.listen(8000);