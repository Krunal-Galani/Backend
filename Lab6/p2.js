const http = require("http");
const server = http.createServer((req,res)=>{
    
    res.setHeader('content-type','text/html');
    if(req.url=== "/"){
        res.statusCode = 200;
        res.end("<h1>Home Page</h1>");
    }
    else if(req.url==="/about"){
        res.statusCode = 200;
        res.end("<h1>About</h1>");
    }
    else if(req.url==="/contact"){
        res.statusCode = 200;
        res.end("<h1>contact</h1>");
    }
    else if(req.url === "/end"){
        res.statusCode = 200;
        res.end("<h1>End</h1>");
    }
    else{
        res.statusCode = 404;
        res.end("<h1>Page Not Found</h1>");
    }
})
server.listen(3010,()=>{
    console.log(`Server started at port 3010`);
})