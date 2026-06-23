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
// app.get("/user",(req,res)=>{
//     res.send({firstName:"Utkarsh",
// lastName :"Srivastav"
//  } )
// })

// app.post("/user",(req,res)=>{
//   //saving data to DB.
//     res.send("Data Successfully saved to the db");
// })

// /user,usr both are work because of ? mark e is a optional
// app.get("/use?r", (req, res) => {
//     res.send({
//         firstName: "Utkarsh",
//         lastName: "Srivastav"
//     })
// });

// app.use("/route", rh , [rh1 , rh2],rh3,rh5);
// app.use(
//   "/user", 
//   (req, res,next) => {
//   console.log("Handling the route user!!");
//    next();
//   // res.send("Response 1st!!");  

// }, (req, res,next) => {
//   console.log("Handling the route user 2!!");
//   // res.send("Response 2nd!!");
//   next();
// }
// , (req, res,next) => {
//   console.log("Handling the route user 3!!");
//   // res.send("Response 3rd!!");
//   next();
// }
// , (req, res ,next) => {
//   console.log("Handling the route user 4!!");
//   // res.send("Response 4th!!");
//   next();
// }
// , (req, res ,next) => {
//   console.log("Handling the route user 5!!");
//   res.send("Response 5th!!");
//   // next();
// }
// );


// app.get (
//   "/user",
//   (req,res,next)=>{
//     console.log("Handling route user");
//     next();
//   }
// );


// app.get (
//   "/user",
//   (req,res,next)=>{
//     console.log("Handling route user");
//     res.send ("2nd Reute handlee")
//   }
// )
  // const {adminAuth,userAuth} = require("./middlewares/auth");

//Handle Auth middleware  for only GET requests GET,POST,..... requests handle 
// app.use("/admin",adminAuth);
// app.user("user",userAuth);
// app.post("/user/login",(req,res)=>{
// res.send("User logged is successfully")
// });


// app.use("/user/data", userAuth,(req, res) => {
//   res.send("user data sent")
// });

// app.get("/admin/getAllData", (req, res) => {
//   res.send("All data sent");
// });
// app.get("/admin/deleteUser", (req, res) => {
//   res.send("Delete a user");
// })

//HANDLE ERROR 


app.use("/",(err,req,res,next)=>{
  if(err){
    res.status(500).send("Something went wrong contach with admnistrator");
  }
});


app.get("/getUserData",(req,res)=>{
  try{
  throw new Error("sfbdvisd");
  res.send("User Data sent");
  }
  catch{
    res.status(500).send("Some Error contact support team");
  }
});


app.listen(3000, () => {
  console.log("Server is successfully listening on port 3000....")
});



