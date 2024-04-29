'use client'
import { Suspense, useEffect, useState } from "react";
import ProductsLayout from "./layout";
import Loading from "../loading";
import { ProductList } from "./product-list";
import { getAllProducts } from "../lib/actions";
import { Product } from "../lib/types";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([])
  
  useEffect(()=> {
    const fetchProduct = async () => {
      const fetchedProducts = await getAllProducts()
      setProducts(fetchedProducts)
    }
    fetchProduct()
  }, [])
  
  return (
    <ProductsLayout>
      <Suspense fallback={<Loading />}>
        <ProductList products={products}></ProductList>
      </Suspense>
    </ProductsLayout>
  )
}
