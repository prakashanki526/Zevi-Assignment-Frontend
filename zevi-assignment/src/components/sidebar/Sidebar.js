import React, {useState, useEffect} from 'react';
import styles from './Sidebar.module.css'
import { getBrands, getAllProducts } from '../../api/discover';
import starEmpty from '../../assets/star-empty.svg';
import starFill from '../../assets/star-fill.svg';
import { Rating } from 'react-simple-star-rating'
import { useNavigate } from 'react-router-dom';

const Sidebar = (props) => {
    const [brandList, setBrandList] = useState([]);
    const filters = props.filters;
    const setFilters = props.setFilters;
    const [brandIsckecked, setBrandIsChecked] = useState(false);
    const navigate = useNavigate();

    async function fetchBrands(){
        const brands = await getBrands();
        setBrandList(brands);
    }

    useEffect(()=>{
        fetchBrands();
    },[])

    function handleFilterBrand(e){
        setFilters({...filters, brand: e.target.value})
    }

    function handleFilterPrice(e){
        setFilters({...filters, priceMin: e.target.value == 1000 ? 0 : 1000, priceMax: e.target.value ==1000 ? 999 : 3000});
    }

    function handleFilterRating(e){
        setFilters({...filters, rating: e.target.value})
    }

    function handleClearFilters(){
        setFilters({
            name: filters.name,
            brand: "",
            priceMin: "",
            priceMax: "",
            rating: ""
        });
    }

    async function fetchAllProducts(){
        props.setIsLoading(true);
        const products = await getAllProducts();
        props.setIsLoading(false);
        props.setProductList(products);
    }
    
    async function handleViewAll(){
        setFilters({
            name: "",
            brand: "",
            priceMin: "",
            priceMax: "",
            rating: ""
        })
        navigate('/products');
        // await fetchAllProducts();
    }
    

    const ratings = [5,4,3,2,1];

    return (
        <div className={styles.container}>
            <div className={styles.filterContainer}>
                <span className={styles.title}>BRAND</span>
                <div className={styles.filters}>
                    {brandList.map((brand,index)=>{
                        return (
                            <div className={styles.filter} key={index}>
                                <input type='checkbox' className={styles.checkbox} onChange={handleFilterBrand} value={brand.name} checked={filters.brand === brand.name ? true : false} />
                                <label>&nbsp;{brand.name}</label><br></br>
                            </div>
                        )
                    })}
                </div>
                <div className={styles.hr}></div>
            </div>
            <div className={styles.filterContainer}>
                <span className={styles.title}>PRICE RANGE</span>
                <div className={styles.filters}>
                    <div className={styles.filter}>
                        <input type='checkbox' className={styles.checkbox} onChange={handleFilterPrice} value={1000} checked={filters.priceMin === 0 ? true : false} />
                        <label>&nbsp;Below 1000</label><br></br>
                    </div>
                    <div className={styles.filter}>
                        <input type='checkbox' className={styles.checkbox} onChange={handleFilterPrice} value={3000} checked={filters.priceMin == 1000 ? true : false} />
                        <label>&nbsp;1000 To 3000</label><br></br>
                    </div>
                </div>
                <div className={styles.hr}></div>
            </div>
            <div className={styles.filterContainer}>
                <span className={styles.title}>RATINGS</span>
                <div className={styles.filters}>
                    {ratings.map((rating)=>{
                        return (
                            <div className={styles.filter} key={rating}>
                                <input type='checkbox' className={styles.checkbox}  onChange={handleFilterRating} value={rating} checked={filters.rating == rating ? true : false} />
                                <Rating initialValue={rating} size={20} allowHover={false} readonly={true} />
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={styles.btnContainer}>
                <div className={styles.clear} onClick={handleClearFilters}>CLEAR FILTERS</div>
                <div className={styles.showAll} onClick={handleViewAll}>VIEW ALL PRODUCTS</div>
            </div>
        </div>
    );
};

export default Sidebar;