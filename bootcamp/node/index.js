const http = require('http');
const fs = require('fs');

const server = http.createServer( (req, res) => {
    res.writeHead(200, {'content-type': 'text/html'});
    const url = req.url;
    let page = '404';

    if(url === '/') page = 'index';
    if(url === '/about') page = 'about';
    if(url === '/contact-me') page = 'contact-me';


    fs.createReadStream(`./node-pages/${page}.html`).pipe(res);
});

server.listen(8080);