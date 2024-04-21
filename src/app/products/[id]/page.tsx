'use client'
import { Product, deleteProduct, getProduct } from '../actions'
import Link from 'next/link';
import styles from './detail.module.css';
import { useEffect, useState } from 'react';
import Loading from '@/app/feed/loading';
import { useRouter } from 'next/router';
import { redirect } from 'next/navigation';


export default  function Detail({ params }: { params: { id: number } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [deleted, setDeleted] = useState(false); 

  useEffect(() => {
    if (deleted) {
      redirect(`/products`) 
    }
    const fetchData = async () => {
      const fetchedProduct = await getProduct(params.id);
      setProduct(fetchedProduct);
    };
    fetchData();
  }, [params.id, deleted]);

  const handleDelete = async () => {
    try {
      await deleteProduct(params.id);
      setDeleted(true)
      console.log('Prodotto eliminato con successo');
    } catch (error) {
      console.log('Errore durante l\'eliminazione del prodotto.');
    } finally {
    }
  };

  if (!product) return <Loading></Loading>
  
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", padding: "3rem" }}>
      <span>ID del prodotto: {product.id}</span>
      <span>Prodotto: {product.title}</span>
      <span>Descrizione: {product.description}</span>
      <span>Prezzo: {product.price}</span>
      <div className={styles.grid}>
        <Link
          href=""
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Edit
          </h2>
        </Link>

        <button onClick={handleDelete} className={styles.card} style={{fontSize: "24px"}}>
          Elimina Prodotto
        </button>
      </div>
    </div>
  )
}


