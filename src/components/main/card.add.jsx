import React, { useRef } from 'react';
import styles from './card.maker.module.css'

const CardAdd = ({addCard}) => 
{   
    const formRef = useRef();
    const nameRef = useRef();
    const companyRef = useRef();
    const themeRef = useRef();
    const departmentRef = useRef();
    const emailRef = useRef();
    const commentRef = useRef();

    const onSubmit = (event) => {
        event.preventDefault();
        const card = {
            id: Date.now(),
            name: nameRef.current.value || '',
            company: companyRef.current.value || '',
            theme: themeRef.current.value,
            department: departmentRef.current.value || '',
            email: emailRef.current.value || '',
            comment: commentRef.current.value || '',
            fileName: '',
            fileURL: '',
        }
        formRef.current.reset();
        addCard(card);
    }

        return(                                
                    <div className="item">
                        <form ref={formRef}  action="post"  className={styles.form}>
                            <input ref={nameRef}  className={styles.input}  type="text" name="name" placeholder="NAME"/>
                            <input ref={companyRef} className={styles.input}  type="text" name="company" placeholder="COMPANY" />                            
                            <select ref={themeRef} className={styles.select}  name="theme" form="myForm">
                                <option value="dark">Dark</option>
                                <option value="light">Light</option>
                                <option value="colorful">Colorful</option>                                
                            </select>
                            <input ref={departmentRef} className={styles.input}  type="text" name="department" placeholder="DEPARTMENT" />                    
                            <input ref={emailRef} className={styles.input}  type="text" name="email" placeholder="EMAIL" />
                            <textarea ref={commentRef} className={styles.textarea} type="text" name="comment" placeholder="COMMENT"/>
                            <button className={styles.button}>Image</button>
                            <button className={styles.button} onClick={onSubmit}>ADD</button>
                        </form>
                    </div>
                
    )};

export default CardAdd;