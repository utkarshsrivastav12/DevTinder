const express = require('express');

const app = express();// instance of an express.js application 

// creating a new web server 
//i have to call listen 

app.use( "/",(req,res) =>{
     //request handler
  res.send("Hello from the server Dashboard");
});
app.use( "/home",(req,res) =>{
     //request handler
  res.send("Hello from the server home");
});


app.use("/test", (req,res) =>{
     //request handler
  res.send("Hello from the server test");
});


app.listen(3000, ()=>{
    console.log("Server is successfully listening on port 3000....")
} );



