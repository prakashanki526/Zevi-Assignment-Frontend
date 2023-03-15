import React, { useState } from 'react';
import styles from './Home.module.css'
import Inputbox from '../../components/inputBox/Inputbox';
import LatestTrendsContainer from '../../components/latestTrendsContainer/LatestTrendsContainer';

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
        </div>
    );
};

export default Home;