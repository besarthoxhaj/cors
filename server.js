'use strict';

const http = require('http');
const fs = require('fs');
const htmlFile = fs.readFileSync(__dirname + '/index.html','utf8');

http.createServer((req,res) => {

  if(req.url === '/favicon.ico') {
    return res.end('Favicon');
  }

  console.log('Server Host %s',req.headers.host);
  console.log('Serving %s %s',req.method,req.url);
  console.log('Origin %s',req.headers.origin);

  if(req.url === '/' && req.method === 'GET') {
    res.end(htmlFile);
    return;
  }

  if(req.url === '/api/notAllow' && req.method === 'GET') {
    res.end(JSON.stringify({data:'Hello, World!'}));
    return;
  }

  if(req.url === '/api/allow' && req.method === 'GET') {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.end(JSON.stringify({data:'Hello, World!'}));
    return;
  }

  if(req.url === '/api/notAllow/headers' && req.method === 'GET') {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.end(JSON.stringify({data:'Hello, World!'}));
    return;
  }

  if(req.url === '/api/allow/headers') {

    if(req.method === 'OPTIONS') {
      res.setHeader('Access-Control-Allow-Headers','Authorization');
      res.setHeader('Access-Control-Allow-Origin','*');
      res.end();
      return;
    }

    if(req.method === 'GET') {
      res.setHeader('Access-Control-Allow-Origin','*');
      res.end(JSON.stringify({data:'Hello, World!'}));
      return;
    }
  }

  res.end('Not Found!');
}).listen(5050);

console.log('Server running!');
