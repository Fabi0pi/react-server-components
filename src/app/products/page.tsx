'use server'
import { Suspense } from "react";
import { ProductCard } from "./Components/ProductCard";
import styles from './products.module.css';
import ProductsLayout from "./layout";
import Loading from "../feed/loading";
import { getAllProducts } from "./actions";

export default async function Products() {
  const products = await getAllProducts()

  return (
    <ProductsLayout>
      <Suspense fallback={<Loading />}>
        <div className={styles.listContainer}>
          {
            products.map((el: Record<string, any>) => {
              return <ProductCard
                id={el.id}
                imageSrc={el.image}
                description={el.title}
                title={el.category}
                price={el.price}
                rate={el.rating.rate}
                key={el.id}
              />
            })
          }
        </div>
      </Suspense>
    </ProductsLayout>
  )
}
