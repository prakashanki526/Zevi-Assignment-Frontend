import React, { useState } from 'react';
import styles from './Home.module.css'
import Inputbox from '../../components/inputBox/Inputbox';
import LatestTrendsContainer from '../../components/latestTrendsContainer/LatestTrendsContainer';
import backgroundImg from '../../assets/background.jpg'
import Logo from '../../components/logo/Logo';

const Home = () => {
    const [isInputFocused, setIsInputFocused] = useState(false);

    return (
        <div className={styles.home}>
            <div className={styles.searchBarContainer}>
                <Inputbox setIsInputFocused={setIsInputFocused} />
            </div>
            {isInputFocused === true ? <div className={styles.latestTrendsContainer}>
                <LatestTrendsContainer />
            </div> : ""}
            <div className={styles.logo}>
                <Logo />
            </div>
        </div>
    );
};

export default Home;