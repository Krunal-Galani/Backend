const http = require("http");
const fs = require("fs");
const server = http.createServer((req,res)=>{
    
    res.setHeader('content-type','text/html');
    if(req.url=== "/"){
        res.statusCode = 200;
        res.end("<h1>Home Page</h1>");
    }
    else if(req.url==="/about"){
        res.statusCode = 200;
        fs.readFile('hello.txt',(err,data)=>{
            if(err){
                res.end(err);
            }else{
                res.end(data);
            }
        })
    }
    else{
        res.statusCode = 404;
        res.end("<h1>Page Not Found</h1>");
    }
})
server.listen(3010,()=>{
    console.log(`Server started at port 3010`);
})