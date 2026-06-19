const express = require('express');

const app = express();// instance of an express.js application 

// creating a new web server 
//i have to call listen


//this will match all the HTTP method API calls to /test
// app.use( "/user",(req,res) =>{
//      //request handler
//   res.send("Hello from the server user");
// });

//order matters in routing 
// This will only handle get call to /user 
app.get("/user",(req,res)=>{
    res.send({firstName:"Utkarsh",
lastName :"Srivastav"
 } )
})

app.post("/user",(req,res)=>{
  //saving data to DB.
    res.send("Data Successfully saved to the db");
})


app.listen(3000, ()=>{
    console.log("Server is successfully listening on port 3000....")
} );



