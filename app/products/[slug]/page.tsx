
import React from 'react';
import styles from './detail.module.css';
import { editProduct } from '@/app/lib/actions';
import { getProduct } from '@/app/lib/data';
import { DeleteProduct } from '../Components/buttons';

export default async function Detail({ params }: { params: { slug: number } }) {
  const product = await getProduct(params.slug)
  if (!product) return

  return (
    <>
      <form action={editProduct} className={styles.formContainer}>
        <div className={styles.field}>
          <span>ID: {product.id}</span>
          <input type="text" name="id" defaultValue={product.id} />
        </div>
        <div className={styles.field}>
          <span>Image url</span>
          <input type="text" name="image" defaultValue={product.image} />
        </div>
        <div className={styles.field}>
          <span>TITLE: {product.category}</span>
          <input type="text" name="title" defaultValue={product.category} />
        </div>
        <div className={styles.field}>
          <span>PRICE: {product.price} </span>
          <input type="number" name="price" defaultValue={product.price} />
        </div>
        <button type="submit">Salva modifiche</button>
        <div>
          Enter the product id to delete it
          <DeleteProduct />
        </div>
      </form>
    </>
  );
}
