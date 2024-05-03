import { Suspense } from "react";
import ProductsLayout from "./layout";
import Loading from "./Components/loading";
import { ProductList } from "./product-list";
import { getProducts } from "../lib/data";

export default async function Products() {

  const products = await getProducts()
  if (!products) return

  return (
    <Suspense fallback={<Loading />}>
      <ProductsLayout>
        <ProductList products={products}></ProductList>
      </ProductsLayout>
    </Suspense>
  )
}
