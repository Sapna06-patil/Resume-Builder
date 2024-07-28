import mongoose from "mongoose";
// import usermodel from "../models/usermodel.js";

// const connectDB = async () => {
//   try {
//     //database Name
//     const databaseName = "datamem";
//     const con = await mongoose.connect(
//       `mongodb://127.0.0.1:27017/${databaseName}`,
//       {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         // useCreateIndex: true,
//       }
//     );
//     usermodel();
//     console.log(`Database connected : ${con.connection.host}`);
//   } catch (error) {
//     console.error(`Error: ${error.message}`);
//     process.exit(1);
//   }
// };

// export default connectDB;

// resume-builder-backend/config/db.js
// const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // const databaseName = "datamem";
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

// module.exports = connectDB;
export default connectDB;
