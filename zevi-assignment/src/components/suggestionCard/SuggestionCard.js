import React from 'react';
import styles from './SuggestionCard.module.css'

const SuggestionCard = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <img src={props.productDetails.img} alt="image" className={styles.img}></img>
                <div className={styles.viewProduct}>View Product</div>
            </div>
            <div className={styles.nameContainer}>{props.productDetails.name}</div>
        </div>
    );
};

export default SuggestionCard;