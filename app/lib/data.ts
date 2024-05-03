import { connectToDB } from "./db";
import { Product } from "./models";
import { Product as ProductType } from './types';

export const getProducts = async () => {
  try {
    connectToDB();
    const products: ProductType[] = await Product.find();
    return products;
  } catch (err) {
    console.log("get products error: ", err);
  }
};

export const getProduct = async (id: number) => {
  try {
    connectToDB();
    const product: ProductType | null = await Product.findOne({ id });
    return product;
  } catch (err) {
    console.log("get product error: ", err);
  }
};
