import mongoose from "mongoose";

export const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO as string);
  } catch (err) {
    console.log("error: ", err);
  }
};
