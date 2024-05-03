import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/poc";

const connectToMongoDB = async () => {
  mongoose.set("strictQuery", true);
  mongoose.connect(MONGO_URI);
  mongoose.connection.once("open", () => {
    console.log("Connected to MongoDB Successfully!!");
  });
  mongoose.connection.on("error", (err) => {
    console.log("Error::", err);
  });
};

export default connectToMongoDB;
