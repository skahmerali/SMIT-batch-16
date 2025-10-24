const mongoose = require("mongoose");

const dotenv = require("dotenv");

dotenv.config();

console.log(process.env.DB);
async function dbCon() {
  try {
    const db = await mongoose.connect(process.env.DB);
    mongoose.connection.on("connected", () =>
      console.log("DATABASE SUCCESSFULLY CONNECTED...!")
    );

    mongoose.connection.on("disconnected", () =>
      console.log("DATABASE CONNECTION TERMINATED...!")
    );
  } catch (err) {
    console.log(err, "here is an error");
  }
}

module.exports = dbCon;
