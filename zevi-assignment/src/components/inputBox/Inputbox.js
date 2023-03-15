import React, {useState} from 'react';
import styles from './Inputbox.module.css'
import searchIcon from '../../assets/search-line.svg'
import { useNavigate } from 'react-router-dom';

const Inputbox = (props) => {
    const [inputText, setInputText] = useState("");
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
        navigate(`/products/${inputText}`);
        setInputText("");
    }

    return (
        <div className={styles.container}>
            <div className={styles.inputFieldContainer}>
                <input type="text" value={inputText} onChange={e=> setInputText(e.target.value)} onKeyUp={handleKeySearch} placeholder='Search' className={styles.inputField} onClick={()=>props.setIsInputFocused(true)}></input>
            </div>
            <div className={styles.searchIconContainer} onClick={handleSearch}>
                <img src={searchIcon} alt="search" className={styles.searchIcon}></img>
            </div>
        </div>
    );
};

export default Inputbox;