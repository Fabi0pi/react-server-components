import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <main className={styles.main}>
      <div className={styles.grid}>
        <Link
          href="/products"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Products <span>-&gt;</span>
          </h2>
        </Link>
        <Link
          href="/products/create"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Add new product <span>-&gt;</span>
          </h2>
        </Link>
      </div>
    </main>
    </>
  );
}
