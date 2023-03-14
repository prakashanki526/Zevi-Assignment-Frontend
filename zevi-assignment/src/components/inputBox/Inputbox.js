import React from 'react';
import styles from './Inputbox.module.css'
import searchIcon from '../../assets/search-line.svg'

const Inputbox = () => {
    return (
        <div className={styles.container}>
            <div className={styles.inputFieldContainer}>
                <input type="text" placeholder='Search' className={styles.inputField}></input>
            </div>
            <div className={styles.searchIconContainer}>
                <img src={searchIcon} alt="search" className={styles.searchIcon}></img>
            </div>
        </div>
    );
};

export default Inputbox;