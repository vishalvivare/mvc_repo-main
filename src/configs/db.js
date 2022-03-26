const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://vishal_vivare:<password>@cluster0.pgxpw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
};

module.exports =connect;
