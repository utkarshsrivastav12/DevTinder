const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://theutkarsh55_db_user:WU2GWK43oufRP6Q1@utkarsh1.h9hfmgr.mongodb.net/devTinder");//connnect to the cluster
// but this is not good way 

// A good way is to wrap a async function and call in await

const connectDB = async () => {
    mongoose.connect("mongodb+srv://theutkarsh55_db_user:WU2GWK43oufRP6Q1@utkarsh1.h9hfmgr.mongodb.net/devTinder"
    );
};
  
module.exports = connectDB;



