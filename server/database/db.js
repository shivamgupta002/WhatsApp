import mongoose from "mongoose";

const Connection = async () => {
  try {
    // const url ="mongodb+srv://shivamgupta992909:Shivam@9929@cluster1.m6mrz4g.mongodb.net/";
    const url = "mongodb://localhost:27017/WhatsApp";
    await mongoose.connect(url);
    console.log("Database connected Successfully");
  } catch (e) {
    console.log("Error while connected with dataBase ", e.message);
  }
};
export default Connection;
