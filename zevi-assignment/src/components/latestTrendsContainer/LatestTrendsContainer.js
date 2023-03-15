import React, { useEffect, useState } from 'react';
import styles from './LatestTrendsContainer.module.css'
import SuggestionCard from '../suggestionCard/SuggestionCard';
import { getTrendingProducts, getCategories } from '../../api/discover';

const LatestTrendsContainer = () => {
    const [trendingList, setTrendingList] = useState([]);
    const [categoryList, setCategoryList] = useState([]);

    async function fetchTrendingProducts(){
        const productList = await getTrendingProducts();
        setTrendingList(productList);
    }

    async function fetchCategories(){
        const list = await getCategories();
        setCategoryList(list);
    }

    useEffect(()=>{
        fetchTrendingProducts();
        fetchCategories();
    },[])

    return (
        <div className={styles.container}>
            <div className={styles.latestTrends}>
                <h3 className={styles.title}>Latest Trends</h3>
                <div className={styles.cardContainer}>
                    {trendingList.map((product,index)=>{
                        return <SuggestionCard productDetails={product} key={index}/>
                    })}
                </div>
            </div>
            <div className={styles.populars}>
                <h3 className={styles.title}>Popular Suggestions</h3>
                {categoryList.map((category,index)=>{
                    return (
                        <div className={styles.category}>{category.name}</div>
                    )
                })}
            </div>
        </div>
    );
};

export default LatestTrendsContainer;