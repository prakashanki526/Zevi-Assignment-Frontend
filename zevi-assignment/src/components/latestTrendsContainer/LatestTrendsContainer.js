import React, { useEffect, useState } from 'react';
import styles from './LatestTrendsContainer.module.css'
import SuggestionCard from '../suggestionCard/SuggestionCard';
import { getTrendingProducts, getCategories } from '../../api/discover';
import LoadingSpinner from '../Spinner/Spinner';
import { useNavigate } from 'react-router-dom';

const LatestTrendsContainer = () => {
    const [trendingList, setTrendingList] = useState([]);
    const [categoryList, setCategoryList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    async function fetchTrendingProducts(){
        setIsLoading(true);
        const productList = await getTrendingProducts();
        setIsLoading(false);
        setTrendingList(productList);
    }

    async function fetchCategories(){
        setIsLoading(true);
        const list = await getCategories();
        setIsLoading(false);
        setCategoryList(list);
    }

    useEffect(()=>{
        fetchTrendingProducts();
        fetchCategories();
    },[])

    return (
        <div className={styles.container}>
            {isLoading ? <LoadingSpinner /> :
            <div className={styles.wrapper}>
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
                            <div className={styles.category} onClick={()=>navigate(`/products/${category.name}`)}>{category.name}</div>
                        )
                    })}
                </div>
            </div>}
        </div>
    );
};

export default LatestTrendsContainer;