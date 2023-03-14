import React from 'react';
import styles from './Sidebar.module.css'

const Sidebar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.filterContainer}>
                <span className={styles.title}>BRAND</span>
                <div className={styles.filters}>
                    <div className={styles.filter}>
                        <input type='checkbox' className={styles.checkbox} name='brand' value='Apple' />
                        <label>&nbsp;Apple</label><br></br>
                    </div>
                    <div className={styles.filter}>
                        <input type='checkbox' className={styles.checkbox} name='brand' value='Apple' />
                        <label>&nbsp;Apple</label><br></br>
                    </div>
                </div>
                <div className={styles.hr}></div>
            </div>
            <div className={styles.filterContainer}>
                <span className={styles.title}>PRICE RANGE</span>
                <div className={styles.filters}>
                    <div className={styles.filter}>
                        <input type='checkbox' className={styles.checkbox} name='brand' value='Apple' />
                        <label>&nbsp;Apple</label><br></br>
                    </div>
                    <div className={styles.filter}>
                        <input type='checkbox' className={styles.checkbox} name='brand' value='Apple' />
                        <label>&nbsp;Apple</label><br></br>
                    </div>
                </div>
                <div className={styles.hr}></div>
            </div>
            <div className={styles.filterContainer}>
                <span className={styles.title}>RATINGS</span>
                <div className={styles.filters}>
                    <div className={styles.filter}>
                        <input type='checkbox' className={styles.checkbox} name='brand' value='Apple' />
                        <label>&nbsp;Apple</label><br></br>
                    </div>
                    <div className={styles.filter}>
                        <input type='checkbox' className={styles.checkbox} name='brand' value='Apple' />
                        <label>&nbsp;Apple</label><br></br>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;