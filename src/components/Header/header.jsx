import React from 'react';
import styles from './header.module.css'

const Header = ({onLogout}) => {
    
    

    return(
            <header>

                <h1 className={styles.title}>Business Card Maker</h1>
                {onLogout && (
                    <button className={styles.logout} onClick={onLogout}>LOGOUT</button>
                )}
                

            </header>
    )};

export default Header;