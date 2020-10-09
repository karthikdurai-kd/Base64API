const express = require("express");
const app = express();
const port = process.env.port || 3000;

app.get("/", (req, res)=>{
    res.status(200);
    res.send("Hello World");
})

app.listen(port, ()=>{
    console.log("Server is listening on PORT: "+port);
})