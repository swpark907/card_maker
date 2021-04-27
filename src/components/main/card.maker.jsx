import React from 'react';
import CardAdd from './card.add';
import styles from './card.maker.module.css'

const CardMaker = ({cardData, addCard, deleteCard, changeCard}) => (
            <section className={styles.maker}>
            <h1 className={styles.title}>Maker</h1>
            {cardData.map( card => {
                return(
                    <div key={card.id} className="item">
                        <form action="post"  className={styles.form}>
                            <input className={styles.input}  type="text" name="name" placeholder="NAME" value={card.name} onChange={changeCard}/>
                            <input className={styles.input}  type="text" name="company" placeholder="COMPANY" value={card.company} onChange={changeCard} />                            
                            <select className={styles.select}  name="theme" form="myForm">
                                <option value="dark" onChange={changeCard}>Dark</option>
                                <option value="light" onChange={changeCard}>Light</option>
                                <option value="colorful" onChange={changeCard}>Colorful</option>                                
                            </select>
                            <input className={styles.input}  type="text" name="department" placeholder="DEPARTMENT" value={card.department} onChange={changeCard} />                    
                            <input className={styles.input}  type="text" name="email" placeholder="EMAIL" value={card.email} onChange={changeCard} />
                            <textarea className={styles.textarea} type="text" name="comment" placeholder="COMMENT"  value={card.comment} onChange={changeCard}/>
                            <button className={styles.button}>{card.name} (image Change)</button>
                            <button className={styles.button} onClick={deleteCard} data-id={card.id}>DELETE</button>
                        </form>
                        
                    </div>
                    )
                } )
            }
            <CardAdd addCard = {addCard}></CardAdd>

            </section>
    );

export default CardMaker;