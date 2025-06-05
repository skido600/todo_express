const mongoose = require("mongoose");

const dbconnect = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL);
    console.log("database connected", connect.connection.name);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = dbconnect;
