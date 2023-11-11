// const mongoose = require("mongoose");

// async function connection() {
//   try {
//     await mongoose.connect("mongodb://0.0.0.0/olx");
//     console.log("DB Connected.");
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//   }
// }

// module.exports = connection;
const { default: mongoose } = require("mongoose");
require("../models/adModel");
require("../models/authModel");

const connection = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
    });

    if (connection) {
      console.log("db connected");
    }
  } catch (e) {
    console.log(e);
  }
};

module.exports = connection;
