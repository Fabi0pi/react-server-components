import React from "react"
import styles from './styles/loading.module.css'

export default function Loading() {
    return <div className={styles.container}><div className={styles.ldsRing}><div></div><div></div><div></div><div></div></div></div>
  }