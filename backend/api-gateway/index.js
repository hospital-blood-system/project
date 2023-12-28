const http = require('http');
const httpProxy = require('http-proxy');
const express = require('express');

const createProxyServer = (target) => {
    const proxy = httpProxy.createProxyServer({});
    return (req, res) => {
        console.log(`Proxying request to ${target}`);
        proxy.web(req, res, { target });
    };
};

const app = express();
const gatewayServer = http.createServer(app);

const publicResourceHandler = (req, res) => {
    console.log('Handling public resource locally');
    res.send('This is a public resource');
};

const donorProxyHandler = createProxyServer('http://localhost:8003');
const girisProxyHandler = createProxyServer('http://localhost:8002');
const hastaneProxyHandler = createProxyServer('http://localhost:8004');


app.get('/', publicResourceHandler);

// API Gateway
app.all('/donor/*', donorProxyHandler);
app.all('/giris/*', girisProxyHandler);
app.all('/hastane/*', hastaneProxyHandler);

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

gatewayServer.listen(3002, () => {
    console.log('API Gateway listening on port 3002');
});

/*  
Proxy Server, gelen istekleri olduğu gibi hedef sunucuya (API Server) iletebilir.
API Gateway, gelen istekleri önceden tanımlanmış kurallara göre işleyebilir ve yönlendirebilir.
API Gateway, mikro hizmet mimarisini destekleyebilir ve farklı hizmetleri birleştirebilir.
Proxy Server genellikle daha düşük seviyede çalışırken, API Gateway daha geniş bir hizmet yelpazesi sunabilir. 
*/