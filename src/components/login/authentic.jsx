import React from 'react';
import styles from './authentic.module.css';

const Authentic = ({authService}) => {
    
    const onLogin = event => {
        authService.login(event.currentTarget.textContent)
        .then(console.log('login'))
    }
    
    return(

            <>
                <span className={styles.title}>Login</span>
                    <ul className={styles.link}>
                        <li>  <button className={styles.loginBtn}  onClick = {onLogin}>Google</button> </li>
                    </ul>

            </>
    )};

export default Authentic;