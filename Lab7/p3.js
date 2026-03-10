const express = require("express");
const fs = require("fs");
const app = express();

app.get("/",(req,res)=>{
    res.send("<h1>Hello World</h1>");
})
app.get("/about",(req,res)=>{
    fs.readFile("about.txt",(data,err)=>{
        if(err){
            res.send(err);
        }else{
            req.send(data);
        }
    });
    
})
app.get("/contact",(req,res)=>{
    fs.readFile("contact.txt",(data,err)=>{
        if(err){
            res.send(err);
        }else{
            res.send(data);
        }
    });
})
app.get("/detail",(req,res)=>{
    res.send("<h1>Hello from detail</h1>");
})
app.use((req,res)=>{
    
    res.status(400).send("Page Not Found");
})
app.listen(3000,(req,res)=>{
    console.log("Server start at 3000")
})