'use server'

export type Product = {
  description: string;
  title: string;
  price: number;
  rate: number;
  image: string;
  id: number;
};

export async function getAllProducts() {
  const res = await fetch("https://fakestoreapi.com/products", { cache: 'force-cache' });
  console.log("CHIAMO?", res);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export const getProduct = async (id: number) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export async function updateProduct(product: Product) {
  const { id } = product;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    method: "PUT",
    body: JSON.stringify(product),
  });
  return res.json();
}

export async function addNewProduct(product: Product) {
  const res = await fetch("https://fakestoreapi.com/products", {
    method: "POST",
    body: JSON.stringify(product),
  });

  return res.json();
}

export async function deleteProduct(id: number) {
  try {
    await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE",
    });

    // Fetch the updated list of products after deleting the item
    console.log("ho eliminato il prodotto: ", id);
    const updatedProducts = await getAllProducts();
    return updatedProducts;
    // return res.json();
  } catch (error) {
  }
  
}
