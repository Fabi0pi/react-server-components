'use client'
import { useEffect, useState } from "react";
import { Product } from "../lib/types"
import { ProductCard } from "./Components/ProductCard";
import styles from './products.module.css';

export function ProductList ({products}:{products: Product[]}) {
  const [items, setItems] = useState(products)
  
  useEffect(()=> {
    setItems(products)
  }, [products])

  return (
    <div className={styles.listContainer}>
    {
      items?.map((el: Record<string, any>) => {
        return <ProductCard
          id={el?.id}
          imageSrc={el?.image}
          description={el?.title}
          title={el?.category}
          price={el?.price}
          rate={el?.rating?.rate}
          key={el?.id}
        />
      })
    }
  </div>
  )
}