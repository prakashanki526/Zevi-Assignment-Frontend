import React from 'react';
import styles from './EmptyFile.module.css';

const EmptyFile = () => {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                No Products Found
            </div>
        </div>
    );
};

export default EmptyFile;