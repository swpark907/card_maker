import React from 'react';
import Footer from '../Footer/footer';
import Header from '../Header/header';
import CardMaker from './card.maker';
import CardPreview from './card.preview';
import CardAdd from './card.add';
import styles from './cards.module.css';


const Cards = ({authService, cardData, addCard}) => {
    const onLogout = () => {
        authService.logout();
    }    

    return (
        <section className={styles.cardSection}>
            <Header onLogout={onLogout} />
            <div className={styles.container}>
                <CardMaker cardData={cardData} addCard={addCard}/>
                <CardPreview cardData={cardData}/>                
            </div>
            
            <Footer/>
        </section>
);
}

export default Cards;