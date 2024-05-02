import { ReactNode } from "react";
import styles from './products.module.css';


export default function ProductsLayout({children}: {children: ReactNode}) {
  return (
    <section className={styles.sectionContainer}>{children}</section>
  );
}
