import React, { useEffect, useState } from 'react';
import styles from './SearchResultPage.module.css'
import Inputbox from '../../components/inputBox/Inputbox';
import Sidebar from '../../components/sidebar/Sidebar';
import ProductCard from '../../components/productCard/ProductCard';
import { useParams, useNavigate } from 'react-router-dom';
import { getFilteredProducts } from '../../api/discover';
import searchIcon from '../../assets/search-line.svg';
import LoadingSpinner from '../../components/Spinner/Spinner';
import EmptyFile from '../../components/emptyFile/EmptyFile';
import Logo from '../../components/logo/Logo';

const SearchResultPage = () => {
    const {searchItem} = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [inputText, setInputText] = useState("");
    const [productList, setProductList] = useState([]);
    const [filters, setFilters] = useState({
        name: searchItem,
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

    async function handleSearch(){
        if(!inputText){
            return;
        }
        navigate(`/products/${inputText}`);
        setIsLoading(true);
        const products = await getFilteredProducts({name: inputText});
        setIsLoading(false);
        setProductList(products);
        setInputText("");
    }

    async function fetchFilteredProducts(name, brand="", priceMin=0, priceMax=10000, rating=""){
        setIsLoading(true);
        const products = await getFilteredProducts(name,brand,priceMin,priceMax,rating)
        setIsLoading(false);
        setProductList(products);
    }

    useEffect(()=>{
        if(searchItem){
            fetchFilteredProducts({name: searchItem});
        }
    },[]);


    useEffect(()=>{
        fetchFilteredProducts(filters)
    },[filters])

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
                    <Sidebar filters={filters} setFilters={setFilters} setProductList={setProductList} setIsLoading={setIsLoading} />
                </div>
                <div className={styles.wrapper}>
                    {!productList.length && <EmptyFile />}
                    {isLoading && productList.length>0 && <LoadingSpinner />}
                    {!isLoading && productList.length>0 && <div className={styles.cardContainer}>
                        {productList.map((product,index)=>{
                            return (
                                <ProductCard productDetails={product} key={index} />
                            )
                        })}
                    </div>}
                </div>
            </div>
            <div className={styles.logo}>
                <Logo />
            </div>
        </div>
    );
};

export default SearchResultPage;