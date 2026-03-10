const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("<h1>Hello World</h1>");
})
app.get("/about",(req,res)=>{
    res.send("<h1>Hello from About</h1>");
})
app.get("/contact",(req,res)=>{
    res.send("<h1>Hello from contact</h1>");
    res.send("<h1>Hello from About</h1>");
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