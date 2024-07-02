import { user } from "./models";
import { connectDB } from "./utils";

export const fetchAllUsers = async () => {
  // the "i" in RegExp means the query(username in this case ) we are searching is case insensitive

  try {
    connectDB();
    const users = await user.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch all users");
  }
};
