var http = require('http'); 
var module = require('./firstModule')

http.createServer( (req, res) => {
    res.writeHead(200,{'Content-type':'text/html'});
    res.write(req.url);
    res.end('hello World!' + module.myDateTime());
}).listen(8080);