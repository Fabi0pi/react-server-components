"use server";

import { connectToDB } from "./db";
import { revalidatePath } from "next/cache";
import { Product } from "./models";
import { redirect } from "next/navigation";

export async function editProduct(formData: FormData) {
  const productId = formData.get("id");

  const rawFormData = {
    title: formData.get("title"),
    image: formData.get("image"),
    price: formData.get("price"),
  };

  try {
    connectToDB();
    const product = await Product.findOne({ id: productId });

    if (!product) {
      throw new Error(`Prodotto con ID ${productId} non trovato`);
    }

    product.image = rawFormData.image;
    product.category = rawFormData.title;
    product.price = rawFormData.price;

    await product.save();

    revalidatePath("/products");
    redirect("/products");
  } catch (error) {
    console.error("Errore durante l'aggiornamento del prodotto:", error);
  }
}

export async function deleteProduct(formData: FormData) {
  const {id}  = Object.fromEntries(formData)

  try {
    if (!id) {
      throw new Error("ID not provided");
    }

    await Product.findOneAndDelete({id});
    revalidatePath("/products");
    redirect("/products");
  } catch (err) {
    console.error("delete error: ", err);
  }
}

export async function addProduct(formData: FormData) {
  const newId = Math.floor(1000 + Math.random() * 9000);
  const rawFormData = {
    category: formData.get("title"),
    image: formData.get('image'),
    price: formData.get("price"),
    id: newId.toString()
  };
  
  try {
    connectToDB();
    const newProduct = new Product(Object.assign(rawFormData));
    await newProduct.save();

    revalidatePath("/products");
    redirect("/products");
  } catch (err) {
    console.log("error edit: ", err);
  }
}
