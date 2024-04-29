import Link from 'next/link';
import styles from './productCard.module.css';
import Image from "next/image";
import { DeleteProduct } from './buttons';


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
            <div className={styles.container} >
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
                    <div className={styles.footerCard}>
                        <div>
                            <DeleteProduct id={id} />
                        </div>
                        <div>
                        <Link href={`products/${id}`} > Edit </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


