import mongoose from "mongoose";

const product = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  title: {
    type: String,
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
  },
  image: {
    type: String,
  },
  rating: {
    rate: {
      type: Number,
    },
    count: {
      type: Number,
    },
  },
});

export const Product =
  mongoose.models?.Product || mongoose.model("Product", product);
