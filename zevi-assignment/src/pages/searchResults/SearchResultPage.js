import React from 'react';
import styles from './SearchResultPage.module.css'
import Inputbox from '../../components/inputBox/Inputbox';
import Sidebar from '../../components/sidebar/Sidebar';
import ProductCard from '../../components/productCard/ProductCard';

const SearchResultPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.inputContainer}>
                <Inputbox />
            </div>
            <div className={styles.headingContainer}>
                <span className={styles.heading}>Search Results</span>
            </div>
            <div className={styles.body}>
                <div className={styles.sidebar}>
                    <Sidebar />
                </div>
                <div className={styles.cardContainer}>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </div>
    );
};

export default SearchResultPage;