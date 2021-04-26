import React from 'react';
import styles from './card.preview.module.css'

const DEFAULT_IMAGE = 'images/default_logo.png'

const CardPreview = ({cardData}) => {

    return (
            <section className={styles.preview}>
                <h1 className={styles.title}>Preview</h1>
                <ul className={styles.cardList}>
                    {cardData.map(card =>
                        {   console.log(card.theme)
                            const url = card.fileURL || DEFAULT_IMAGE;
                            return(
                            <li className={`${styles.card} ${getStyles(card.theme)}`}>
                                <div className={styles.cardContainer}>
                                    <img src={url} alt="card-image" className={styles.cardImage}/>
                                    <div className={styles.cardInfo}>
                                        <h1 className={styles.cardName}>{card.name}</h1>
                                        <p className={styles.cardCompany}>{card.company}</p>
                                        <p className={styles.cardDepartment}>{card.department}</p>
                                        <p className={styles.cardEmail}>{card.email}</p>
                                        <p className={styles.cardComment}>{card.comment}</p>
                                    </div>
                                </div>
                            </li>)}
                    )}
                    
                </ul>
            
            </section>
    );
}

const getStyles = (theme) => {
        console.log(theme)
        switch (theme){
            case 'dark':
                return styles.dark;
            case 'light' :
                return styles.light;
            case 'colorful' :
                return styles.colorful;
            default :
            throw new Error (`unknown theme : ${theme}`)
        }

    
}

export default CardPreview;