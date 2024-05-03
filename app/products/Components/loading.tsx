'use client'
import React from "react"
import styles from './styles/loading.module.css'
import { useFormStatus } from "react-dom"

export default function Loading() {
  const { pending } = useFormStatus()
    console.log("🚀 ~ Loading ~ pending:", pending)
    return pending && <div className={styles.container}><div className={styles.ldsRing}><div></div><div></div><div></div><div></div></div></div>
  }