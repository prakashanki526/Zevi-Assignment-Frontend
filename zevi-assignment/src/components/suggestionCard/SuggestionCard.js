import React from 'react';
import styles from './SuggestionCard.module.css'

const SuggestionCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}></div>
            <div className={styles.nameContainer}>Image type</div>
        </div>
    );
};

export default SuggestionCard;