'use client'
import { useEffect, useState } from 'react';
import Loading from '@/app/loading';
import { Product } from '@/app/lib/types';
import {  getProduct } from '@/app/lib/api';


export default  function Detail({ params }: { params: { id: number } }) {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedProduct = await getProduct(params.id);
      setProduct(fetchedProduct);
    };
    fetchData();
  }, [params.id]);
  

  if (!product) return <Loading></Loading>
  
  return (
    <form>
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", padding: "3rem" }}>
      <span>ID del prodotto: {product.id}</span>
      <span>Prodotto: {product.title}</span>
      <span>Descrizione: {product.description}</span>
      <span>Prezzo: {product.price}</span>
    </div>
    </form>
  )
}


