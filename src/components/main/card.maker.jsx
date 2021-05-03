import React from 'react';
import Card from './card';
import CardAdd from './card.add';
import styles from './card.maker.module.css'

const CardMaker = ({cardData, addCard, deleteCard, changeCard}) => {
    

    
    
    return (
            <section className={styles.maker}>
            <h1 className={styles.title}>Maker</h1>
            {cardData.map( card => {
                return(
                    
                    <Card card={card} deleteCard={deleteCard} changeCard={changeCard}></Card>
                    
                    )
                } )
            }
            <CardAdd addCard = {addCard}></CardAdd>

            </section>
    )};

export default CardMaker;