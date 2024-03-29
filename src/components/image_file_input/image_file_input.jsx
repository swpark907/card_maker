import React, { useRef, useState } from 'react';
import styles from './image_file_input.module.css'

const ImageFileInput = ({imageUploader, name, onFileChange}) => {

    const [loading, setLoading] = useState(false);    

    const inputRef = useRef()
    const onButtonClick = (event) => {
        event.preventDefault();
        inputRef.current.click();
    }

    const onChange = async event => {
        setLoading(true);
        console.log(event.target.files[0])
        const uploaded = await imageUploader.upload(event.target.files[0])
        console.log(uploaded);
        onFileChange({
            name: uploaded.original_filename,
            url: uploaded.url,
        })
        setLoading(false);
    }

    return(
        <div className={styles.container}>
            <input className = {styles.input} ref={inputRef}  type="file" accept="image/*" name="file" onChange={onChange}/>
            {!loading && <button className={`${styles.button} ${name ? styles.pink : styles.grey }`} onClick={onButtonClick}>
                {name || "No file"}
            </button>}

            {loading && <div className={styles.loading}></div>}

        </div>
    )
};

export default ImageFileInput;