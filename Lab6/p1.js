const http = require("http");
const server = http.createServer((req,res)=>{
    res.end("Hello world");
})
server.listen(3010,()=>{
    console.log(`Server started at port 3010`);
})