import React from 'react';
import styles from './card.preview.module.css'
import PreviewCard from './card.previewCard';

const DEFAULT_IMAGE = 'images/default_logo.png'

const CardPreview = ({cardData}) => {

    return (
            <section className={styles.preview}>
                <h1 className={styles.title}>Preview</h1>
                <ul className={styles.cardList}>
                    {Object.keys(cardData).map(key =>
                        {   
                            const url = cardData[key].fileURL || DEFAULT_IMAGE;
                            return(
                                <PreviewCard card={cardData[key]} url={url}></PreviewCard>
                            )}
                    )}
                    
                </ul>
            
            </section>
    );
}



export default CardPreview;