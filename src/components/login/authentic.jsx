import React from 'react';
import styles from './authentic.module.css';

const Authentic = ({authService, goToCards}) => {
    
    const onLogin = event => {
        authService.login(event.currentTarget.textContent)        
        .then(data => goToCards(data.user.uid))
    }
    
    return(

            <section className={styles.authentic}>
                <span className={styles.title}>Login</span>
                    <ul className={styles.link}>
                        <li>  <button className={styles.loginBtn}  onClick = {onLogin}>Google</button> </li>
                    </ul>

            </section>
    )};

export default Authentic;