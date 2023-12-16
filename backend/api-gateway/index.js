const http = require('http');
const httpProxy = require('http-proxy');
const express = require('express');

const proxy = httpProxy.createProxyServer({});
const proxyServer = http.createServer((req, res) => {
    console.log('Proxying request to API server');
    proxy.web(req, res, {target :'http://localhost:3000'});
})

const app=express();
const gatewayServer= http.createServer(app);

app.get('/',(req,res)=>{
    console.log('Handling public resource locally');
    res.sendFile('This is a public resource ');
})

app.get('/deneme',(req,res)=>{
    console.log('Handling public resource locally');
    proxy.web(req, res, {target :'http://localhost:3001'})
})

proxyServer.listen(4000,()=>{
    console.log('Proxy server is running on port 4000');
});

gatewayServer.listen(3002,()=>{
    console.log('API Gateway listening on port 3002');
})

/*  
Proxy Server, gelen istekleri olduğu gibi hedef sunucuya (API Server) iletebilir.
API Gateway, gelen istekleri önceden tanımlanmış kurallara göre işleyebilir ve yönlendirebilir.
API Gateway, mikro hizmet mimarisini destekleyebilir ve farklı hizmetleri birleştirebilir.
Proxy Server genellikle daha düşük seviyede çalışırken, API Gateway daha geniş bir hizmet yelpazesi sunabilir. 
*/