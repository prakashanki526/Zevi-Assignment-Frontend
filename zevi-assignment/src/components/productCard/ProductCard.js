import React from 'react';
import styles from './ProductCard.module.css'
import heartLineIcon from '../../assets/heart-line.svg'
import heartFillIcon from '../../assets/heart-fill.svg'

const ProductCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <img src='https://cdn.pixabay.com/photo/2017/12/22/14/42/girl-3033718__340.jpg' alt='img' className={styles.img}></img>
                <div className={styles.likeBtn}>
                    <img src={heartFillIcon} alt="like"></img>
                </div>
                <div className={styles.viewProduct}>View Product</div>
            </div>
            <div className={styles.detailsContainer}>
                <div className={styles.name}>Item 1 name</div>
                <div className={styles.price}> $289.00</div>
                <div className={styles.rating}>five star</div>
            </div>
        </div>
    );
};

export default ProductCard;