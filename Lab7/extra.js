const express = require("express");
const app = express();
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("<h1>Hello World</h1>");
})
app.get("/users",(res,req)=>{
    res.send(req.query);
})
app.post("/register",(req,res)=>{
    const {name ,email,password} = req.body;
    res.send(`Name: ${name} email : ${email} password : ${password}`);
})
app.get("/users/:id",(req,res)=>{
    res.send(req.params.id);
})
app.use((req,res)=>{
    res.status(400).send("Page Not Found");
})
app.listen(3000,(req,res)=>{
    console.log("Server start at 3000")
})