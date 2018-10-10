let express = require("express");
let about = require("./data/about");
let education = require("./data/education");
let story = require("./data/story");
let app = express();
let http = require('http');
let server;
let port = process.env.port || 3000;

server = http.createServer(app)


server.listen(port, ()=>{
    console.log('server listening on port ', port)
})

app.get('/about', (req,res) => {
    console.log('get /about')
    console.log(about)
})

app.get('/education', (req,res)=> {
    console.log('get /education');
    console.log(education);
})

app.get('/story', (req,res) =>{
    console.log('get /story');
    console.log(story)
})


