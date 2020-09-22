/** @format */

const mongoose = require("mongoose");
const { mongoURI } = require("./dev");
// const config = require("config");
// // const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useCreateIndex: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
    });

    console.log("MongoDB is Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
