import React from 'react';
import styles from './LatestTrendsContainer.module.css'
import SuggestionCard from '../suggestionCard/SuggestionCard';

const LatestTrendsContainer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.latestTrends}>
                <h3 className={styles.title}>Latest Trends</h3>
                <div className={styles.cardContainer}>
                    <SuggestionCard />
                    <SuggestionCard />
                    <SuggestionCard />
                    <SuggestionCard />
                </div>
            </div>
            <div className={styles.populars}>
                <h3 className={styles.title}>Popular Suggestions</h3>
                abcd shs<br></br> adsf egdh
            </div>
        </div>
    );
};

export default LatestTrendsContainer;