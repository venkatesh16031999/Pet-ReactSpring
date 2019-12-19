import React from 'react';
import Navigation from '../../components/navbar/Navigation';
import styles from '../layout/layout.module.css';

const Layout=(props)=>{
    return (
        <div className={styles.layout}>
            <div>
            <Navigation />
            </div>
            {props.children}
        </div>
    );
}

export default Layout;