import React from 'react';
import styles from './Home.module.css'
import Inputbox from '../../components/inputBox/Inputbox';
import LatestTrendsContainer from '../../components/latestTrendsContainer/LatestTrendsContainer';

const Home = () => {
    return (
        <div className={styles.home}>
            <div className={styles.searchBarContainer}>
                <Inputbox />
            </div>
            <div className={styles.latestTrendsContainer}>
                <LatestTrendsContainer />
            </div>
        </div>
    );
};

export default Home;