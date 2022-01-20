import React, { useEffect } from 'react';
import Footer from '../Footer/footer';
import Header from '../Header/header';
import Authentic from './authentic';
import 'firebase/auth';
import 'firebase/firestore'
import styles from './login.module.css'
import { useHistory } from 'react-router';


const Login = ({authService, setUserId}) => {
    const history = useHistory();
    const goToCards = (userId) => {
        history.push(
            {
                pathname: '/cards',
                state: {id: userId},
            }
        )
        setUserId(userId);
    }

    useEffect( () => {
        authService.onAuthChange(user => {
            if(user) {
                setUserId(user.id);
            } else{
                history.push('/');
            }
        })
    })

    useEffect( () => {
        authService.onAuthChange(user => {
            user && goToCards(user.uid);     
        })
    } )

    return(
        <section className={styles.loginSection}>            
            <Header></Header>            
            <Authentic authService={authService} goToCards={goToCards}></Authentic>
            <Footer></Footer>
        </section>
    );

}




export default Login;