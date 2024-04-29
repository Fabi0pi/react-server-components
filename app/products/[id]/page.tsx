'use client'
import React, { useEffect, useState } from 'react';
import Loading from '@/app/loading';
import { getProduct } from '@/app/lib/api';
import { Product } from '@/app/lib/types';
import styles from './detail.module.css';
import { editProduct } from '@/app/lib/actions';

export default function Detail({ params }: { params: { id: number } }) {
  const [product, setProduct] = useState<Product>()
  const [isEdited, setIsEdited] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const fetchedProduct = await getProduct(params.id);
      setProduct(fetchedProduct)
    };
    fetchData();
  }, [params.id])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (product) {
      setProduct({ ...product, [name]: value });
    }
  };

  if (!product) return <Loading />;

  return (
    <form action={editProduct} className={styles.formContainer}>
      <div className={styles.field}>
        <span>ID</span>
        <input type="text" name="id" value={product?.id} disabled onChange={handleInputChange} />
      </div>
      <div className={styles.field}>
        <span>TITLE</span>
        <input type="text" name="title" value={product?.title} onChange={handleInputChange} />
      </div>
      <div className={styles.field}>
        <span>DESCRIPTION  </span>
        <textarea name="description" value={product?.description} onChange={handleInputChange} />
      </div>
      <div className={styles.field}>
        <span>PRICE  </span>
        <input type="number" name="price" value={product?.price} onChange={handleInputChange} />
      </div>
      <button type="submit">Salva modifiche</button>
    </form>
  );
}
