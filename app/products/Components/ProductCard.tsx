import Link from 'next/link';
import styles from './styles/productCard.module.css';
import Image from "next/image";


type Props = {
    description: string
    title: string
    price: number
    rate: number
    imageSrc: string
    id: number
}

export const ProductCard = ({ title, imageSrc, price, rate, id }: Props) => {

    return (
        <Link href={`products/${id}`} >
            <div className={styles.container} >
                <div className={styles.imageContainer}>
                    <Image priority={true} className={styles.image} alt={`Product image - ${title}`} width="210" height="300" src={imageSrc}></Image>
                </div>
                <div className={styles.descriptionContainer}>
                    <div className={styles.title}>
                        {title?.toUpperCase()}
                    </div>
                    <div className={styles.footerCard}>
                        <div>
                            {`€ ${price}`}
                        </div>
                        <div>
                            {`⭐️ ${rate || "New Product"}`}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}


