'use-client'
import Link from 'next/link';
import styles from './productCard.module.css';
import Image from "next/image";


type Props = {
    description: string
    title: string
    price: number
    rate: number
    imageSrc: string
    id: number
}


export const ProductCard = ({ title, description, imageSrc, price, rate, id }: Props) => {

    return (
        <>
            <Link className={styles.container} href={`products/${id}`}>
                <div className={styles.imageContainer}>
                    <Image className={styles.image} alt={`Product image - ${title}`} width="210" height="300" src={imageSrc}></Image>
                </div>
                <div className={styles.descriptionContainer}>
                    <div className={styles.title}>
                        {title.toUpperCase()}
                    </div>
                    <div className={styles.description}>
                        {description}
                    </div>
                    <div className={styles.footerCard}>
                        <div>
                            {`€ ${price}`}
                        </div>
                        <div>
                            {`⭐️ ${rate}`}
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}


