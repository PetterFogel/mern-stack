import mongoose from "mongoose";

const connectDatabase = async () => {
  console.log("MONGO_URI", process.env.MONGO_URI);
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || "");
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error: ${error.message}`);
    }
  }
};

export default connectDatabase;
