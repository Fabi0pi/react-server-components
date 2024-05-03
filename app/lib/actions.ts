"use server";

import { connectToDB } from "./db";
import { revalidateTag } from "next/cache";
import { Product } from "./models";
import { redirect } from "next/navigation";

export async function editProduct(formData: FormData) {
  const productId = formData.get("id");

  const rawFormData = {
    title: formData.get("title"),
    image: formData.get("image"),
    price: formData.get("price"),
  };

    connectToDB();
    const product = await Product.findOne({ id: productId });

    if (!product) {
      throw new Error(`Product with ID ${productId} not found`);
    }

    product.image = rawFormData.image;
    product.category = rawFormData.title;
    product.price = rawFormData.price;

    await product.save();

    revalidateTag("products");
    redirect("/products");
}

export async function deleteProduct(formData: FormData) {
  const {id}  = Object.fromEntries(formData)

    if (!id) {
      throw new Error("ID not provided");
    }

    await Product.findOneAndDelete({id});

    revalidateTag("products");
    redirect("/products");
}

export async function addProduct(formData: FormData) {
  const newId = Math.floor(1000 + Math.random() * 9000);
  const rawFormData = {
    category: formData.get("title"),
    image: formData.get('image'),
    price: formData.get("price"),
    id: newId.toString()
  };
  

    connectToDB();
    const newProduct = new Product(Object.assign(rawFormData));
    if (!newProduct) {
      throw new Error(`something went wrong addProduct`);
    }
    await newProduct.save();

    revalidateTag("products");
    redirect("/products");

}
