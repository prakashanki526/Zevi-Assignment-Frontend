import React, { useEffect, useState } from 'react';
import styles from './SearchResultPage.module.css'
import Inputbox from '../../components/inputBox/Inputbox';
import Sidebar from '../../components/sidebar/Sidebar';
import ProductCard from '../../components/productCard/ProductCard';
import { useParams, useNavigate } from 'react-router-dom';
import { getFilteredProducts } from '../../api/discover';
import searchIcon from '../../assets/search-line.svg'

const SearchResultPage = () => {
    const {searchItem} = useParams();

    const [inputText, setInputText] = useState("");
    const [productList, setProductList] = useState([]);
    const [filters, setFilters] = useState({
        name: "",
        brand: "",
        priceMin: "",
        priceMax: "",
        rating: ""
    });

    const navigate = useNavigate();

    function handleKeySearch(e){
        if(e.code === "Enter"){
            handleSearch();
        }
    }

    function handleSearch(){
        if(!inputText){
            return;
        }
        navigate(`/${inputText}`);
        setInputText("");
    }

    async function fetchFilteredProducts(name, brand="", priceMin=0, priceMax=10000, rating=""){
        const products = await getFilteredProducts(name,brand,priceMin,priceMax,rating)
        setProductList(products);
    }

    useEffect(()=>{
        fetchFilteredProducts(searchItem);
    },[searchItem]);

    return (
        <div className={styles.container}>
            <div className={styles.inputContainer}>
                <div className={styles.inputFieldContainer}>
                    <div className={styles.inputFieldContainer}>
                        <input type="text" value={inputText} onChange={(e)=>setInputText(e.target.value)} placeholder='Search' className={styles.inputField} onKeyDown={handleKeySearch}></input>
                    </div>
                    <div className={styles.searchIconContainer} onClick={handleSearch}>
                        <img src={searchIcon} alt="search" className={styles.searchIcon}></img>
                    </div>
                </div>
            </div>
            <div className={styles.headingContainer}>
                <span className={styles.heading}>Search Results</span>
            </div>
            <div className={styles.body}>
                <div className={styles.sidebar}>
                    <Sidebar filters={filters} setFilters={setFilters} />
                </div>
                <div className={styles.cardContainer}>
                    {productList.map((product,index)=>{
                        return (
                            <ProductCard productDetails={product} key={index} />
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default SearchResultPage;