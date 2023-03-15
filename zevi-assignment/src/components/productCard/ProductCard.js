import React, {useState} from 'react';
import styles from './ProductCard.module.css'
import heartLineIcon from '../../assets/heart-line.svg'
import heartFillIcon from '../../assets/heart-fill.svg'
import { toggleLike } from '../../api/discover';
import { Rating } from 'react-simple-star-rating';

const ProductCard = (props) => {
    const product = props.productDetails;
    const [isFavourite, setIsFavourite] = useState(product.favourite);

    async function handleLike(){
        setIsFavourite(!isFavourite);
        await toggleLike(product._id);
    }

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <img src={product.img} alt='img' className={styles.img}></img>
                <div className={styles.likeBtn} onClick={handleLike}>
                    <img src={isFavourite ? heartFillIcon : heartLineIcon} alt="like"></img>
                </div>
                <div className={styles.viewProduct}>View Product</div>
            </div>
            <div className={styles.detailsContainer}>
                <div className={styles.name}>{product.name}</div>
                <div className={styles.price}>
                    <span className={styles.costPrice}>Rs. {product.price}</span>&nbsp;
                    <span className={styles.sellingPrice}>Rs. {product.sellingPrice}</span>
                </div>
                <div className={styles.rating}>
                    <Rating initialValue={product.rating} size={20} allowHover={false} readonly={true} />
                </div>
            </div>
        </div>
    );
};

export default ProductCard;