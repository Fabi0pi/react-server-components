
import React, { Suspense } from 'react';
import styles from './detail.module.css';
import { addProduct } from '@/app/lib/actions';
import Loading from '../Components/loading';

export default function Detail() {

    return (
        <Suspense fallback={<Loading />}>
            <form action={addProduct} className={styles.formContainer}>
                <div className={styles.field}>
                    <span>TITLE</span>
                    <input type="text" name="title" />
                </div>
                <div className={styles.field}>
                    <span>Image url</span>
                    <input type="text" name="image" defaultValue={"https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2899&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
                </div>
                <div className={styles.field}>
                    <span>PRICE  </span>
                    <input type="number" name="price" />
                </div>
                <button type="submit">Add</button>
            </form>
        </Suspense>
    );
}
