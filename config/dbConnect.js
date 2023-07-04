const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({
    path: "./config.env",
  });
const dbConnect = function(){
    mongoose.connect(process.env.DATABASE_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }).then((conn)=>{
      console.log("connection to database is  successful");
      }).catch((ERR)=>{
        console.log(ERR);
      });
}

module.exports = dbConnect