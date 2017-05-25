var http = require('http');
var stream = require('stream');
var fs = require('fs');

// var gzip = require('zlib').createGzip();
// var inp = fs.createReadStream('client/index.html');
// var out = fs.createWriteStream('cool.txt.gz');

var server = http.createServer(function(req, res){
  // creating html with headers and everything
  res.writeHead(200, {'Content-Type': 'application/javascript'});
  // fs.readFile('client/index.html', function(err, html){

  // fs.readFile('package.json', function(err, html){

  fs.readFile('index.js', function(err, html){
    res.write(html);
    res.end();
  });

  // creating pipes
  // inp.pipe(gzip).pipe(out);


});

server.listen(3000, '127.0.0.1');
console.log('listening on port 3000');
