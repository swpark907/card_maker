import React from 'react';
import Footer from '../Footer/footer';
import Header from '../Header/header';
import CardMaker from './card.maker';
import CardPreview from './card.preview';
import styles from './cards.module.css';


const Cards = ({authService}) => {
    const onLogout = () => {
        authService.logout();
    }    

    return (
        <section className={styles.cardSection}>
            <Header onLogout={onLogout}></Header>
            <div className={styles.container}>
                <CardMaker />
                <CardPreview />                
            </div>
            <Footer></Footer>
        </section>
);
}

export default Cards;