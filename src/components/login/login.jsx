import React from 'react';
import Footer from '../Footer/footer';
import Header from '../Header/header';
import Authentic from './authentic';
import 'firebase/auth';
import 'firebase/firestore'
import styles from './login.module.css'


const Login = ({authService}) => {

    return(
        <section className={styles.loginSection}>

            <Header></Header>            
            <Authentic authService={authService}></Authentic>
            <Footer></Footer>
        </section>
    );

}




export default Login;