import React, { useRef, useState } from 'react';
import styles from './card.maker.module.css'

const CardAdd = ({FileInput, addCard}) => 
{   
    const formRef = useRef();
    const nameRef = useRef();
    const companyRef = useRef();
    const themeRef = useRef();
    const departmentRef = useRef();
    const emailRef = useRef();
    const commentRef = useRef();
    const [file, setFile] = useState({fileName: null, fileURL: null,})

    const onFileChange = file => {
        setFile({
            fileName: file.name,
            fileURL: file.url,
        })
    }

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
            fileName: file.fileName || '',
            fileURL: file.fileURL || '',
        }        
        formRef.current.reset();
        setFile({
            fileName: '',
            fileURL: '',
        })
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
                            <button className={styles.button}> <FileInput name={file.fileName}onFileChange={onFileChange}/> </button>
                            <button className={styles.button} onClick={onSubmit}>ADD</button>
                        </form>
                    </div>
                
    )};

export default CardAdd;