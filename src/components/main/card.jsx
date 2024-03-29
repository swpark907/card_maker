import React from 'react';
import styles from './card.maker.module.css'

const Card = ({FileInput, deleteCard, changeCard, card}) =>{ 

    const onChange = (event) => {

        if(event.currentTarget == null){
            return;
        }

        event.preventDefault();        

        changeCard({...card, [event.currentTarget.name]: event.currentTarget.value})
    }

    const onFileChange = file => {
        changeCard({
          ...card,
          fileName: file.name,
          fileURL: file.url,
        })
      }

    const onSubmit = (event) => {
        event.preventDefault();
        deleteCard(card);
    }
    
    return(
    <div key={card.id} className="item">
        <form action="post"  className={styles.form}>
            <input className={styles.input}  type="text" name="name" placeholder="NAME" value={card.name} onChange={onChange} card={card}/>
            <input className={styles.input}  type="text" name="company" placeholder="COMPANY" value={card.company} onChange={onChange} card={card} />                            
            <select className={styles.select}  name="theme" form="myForm" onChange={onChange}>
                <option value="dark" onChange={onChange} card={card}>Dark</option>
                <option value="light" onChange={onChange} card={card}>Light</option>
                <option value="colorful" onChange={onChange} card={card}>Colorful</option>                                
            </select>
            <input className={styles.input}  type="text" name="department" placeholder="DEPARTMENT" value={card.department} onChange={onChange} card={card} />                    
            <input className={styles.input}  type="text" name="email" placeholder="EMAIL" value={card.email} onChange={onChange} card={card} />
            <textarea className={styles.textarea} type="text" name="comment" placeholder="COMMENT"  value={card.comment} onChange={onChange} card={card}/>
            <button className={styles.button}> <FileInput name={card.fileName} onFileChange={onFileChange}/> </button>
            <button className={styles.button} onClick={onSubmit} data-id={card.id}>DELETE</button>
        </form>
        
    </div>
    )};

export default Card;