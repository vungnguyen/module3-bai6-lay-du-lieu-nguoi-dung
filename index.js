const http = require('http');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;
const fs = require('fs');
const server = http.createServer((req, res) => {
    let decoder = new StringDecoder('utf-8');
    let buffer = '';
    req.on('data', (data) => {
        buffer += decoder.write(data);
    })
    req.on('end', () =>{
        buffer += decoder.end();
        res.end('Hello NodeJS!');
        console.log(buffer);
    })
})
server.listen(4000,()=>{
    console.log('Server running at http://localhost:4000')
})