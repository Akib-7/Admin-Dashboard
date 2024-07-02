import mongoose from "mongoose";
export const connectDB = async () => {
  const connection = {};
  try {
    //If already Connected
    if (connection.isConnected) {
      return;
    }
    //If not connected then make a new Connection
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log("DB ERROR: " + error);
    throw new Error(error);
  }
};
