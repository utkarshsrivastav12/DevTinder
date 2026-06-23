 const adminAuth = (req, res, next) => {
  console.log("Admin auth is getting checked");
  const token = "xyz";
  const isAdminAutherized = token === "xyz";
  if (!isAdminAutherized) {
    res.status(401).send("Unautherized request");
  } else {
    next();
  }
};

const userAuth =(req, res,next)=>{
    console.log("User auth is getting checked");
    const token = "user";
    const isUserAuthorised = token === "user"
    if(!isUserAuthorised){
        res.status(401).send("Wrong User");
    }else{
        next();
    }
}


module.exports ={
    adminAuth,
    userAuth,
}