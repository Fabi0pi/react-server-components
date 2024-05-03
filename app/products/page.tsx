import { Suspense } from "react";
import ProductsLayout from "./layout";
import Loading from "./Components/loading";
import { ProductList } from "./product-list";
import { getProducts } from "../lib/data";

export default async function Products() {

  const products = await getProducts()
  if (!products) return
  
  return (
    <ProductsLayout>
      <Suspense fallback={<Loading />}>
        <ProductList products={products}></ProductList>
      </Suspense>
    </ProductsLayout>
  )
}
