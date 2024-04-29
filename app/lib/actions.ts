"use server";
import { redirect } from "next/navigation";
import { getProducts, updateProduct } from "./api";
import { Product } from './types';

export async function editProduct(formData: FormData) {
  const rawFormData = {
    title: formData.get("title"),
    description: formData.get("description"),
    price: formData.get("price"),
    // id: formData.get("id"),
  };

  await updateProduct(rawFormData);
  redirect("/products");
}

export async function getAllProducts(): Promise<Product[]> {
    return await getProducts()
}