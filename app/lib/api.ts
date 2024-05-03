import { Product } from "./types";
import { connectToDB } from "./db";
import { Product as ProductSchema } from "./models";

export async function getProducts(): Promise<Product[]> {
  const res = await fetch("https://fakestoreapi.com/products", {
    headers: {
      "Cache-Control": "no-cache",
    },
    next:{tags: ['products']}
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return data as Product[];
}

async function insertProductsToDatabase(products: Product[]) {
  try {
    connectToDB();
    await ProductSchema.insertMany(products);
    console.log("Dati inseriti correttamente nel database.");
  } catch (error) {
    console.error("Errore durante l'inserimento dei dati nel database:", error);
  }
}

async function fetchDataAndInsertToDatabase() {
  try {
    const products = await getProducts();
    await insertProductsToDatabase(products);
    console.log("Prodotti inseriti nel database.");
  } catch (error) {
    console.error("Errore durante l'inserimento nel database:", error);
  }
}

fetchDataAndInsertToDatabase();

// export async function deleteProduct(id: number) {
//   try {
//     await fetch(`https://fakestoreapi.com/products/${id}`, {
//       method: "DELETE",
//     });
//     // revalidatePath('/products');
//     // revalidateTag('products');
//     const product = await getProducts();
//     const updatedProducts = product.filter((el: Product) => el.id !== id);
//     console.log(">>>> updatedProducts:", updatedProducts);
//     return updatedProducts;
//   } catch (error) {}
// }

// export const getProduct = async (id: any) => {
//   const res = await fetch(`https://fakestoreapi.com/products/${id}`);
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   const data = await res.json();
//   return data;
// };

// export async function updateProduct(product: Record<string, any>) {
//   console.log("🚀 ~ updateProduct ~ product:", product);

//   const res = await fetch(`https://fakestoreapi.com/products/${product?.id}`, {
//     method: "PUT",
//     body: JSON.stringify(product),
//   });

//   await res.json();
//   const updatedProducts = await getProducts();

//   return updatedProducts;
// }

// export async function addNewProduct(product: Product) {
//   const res = await fetch("https://fakestoreapi.com/products", {
//     method: "POST",
//     body: JSON.stringify(product),
//   });

//   const data = res.json();
//   return data;
// }
