import React from 'react';
import CardAdd from './card.add';
import styles from './card.maker.module.css'

const CardMaker = ({cardData, addCard}) => (
            <section className={styles.maker}>
            <h1 className={styles.title}>Maker</h1>
            {cardData.map( card => {
                return(
                    <div className="item">
                        <form action="post"  className={styles.form}>
                            <input className={styles.input}  type="text" name="name" placeholder="NAME" value={card.name}/>
                            <input className={styles.input}  type="text" name="company" placeholder="COMPANY" value={card.company} />                            
                            <select className={styles.select}  name="theme" form="myForm">
                                <option value="dark">Dark</option>
                                <option value="light">Light</option>
                                <option value="colorful">Colorful</option>                                
                            </select>
                            <input className={styles.input}  type="text" name="department" placeholder="DEPARTMENT" value={card.department} />                    
                            <input className={styles.input}  type="text" name="email" placeholder="EMAIL" value={card.email} />
                            <textarea className={styles.textarea} type="text" name="comment" placeholder="COMMENT"  value={card.comment}/>
                            <button className={styles.button}>{card.name} (image Change)</button>
                            <button className={styles.button}>DELETE</button>
                        </form>
                        
                    </div>
                    )
                } )
            }
            <CardAdd addCard = {addCard}></CardAdd>

            </section>
    );

export default CardMaker;