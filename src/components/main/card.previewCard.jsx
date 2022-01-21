import React from "react";
import styles from "./card.preview.module.css";

const PreviewCard = ({ url, card }) => {
  return (
    <li key={card.id} className={`${styles.card} ${getStyles(card.theme)}`}>
      <div className={styles.cardContainer}>
        <img src={url} alt="card-img" className={styles.cardImage} />
        <div className={styles.cardInfo}>
          <h1 className={styles.cardName}>{card.name}</h1>
          <p className={styles.cardCompany}>{card.company}</p>
          <p className={styles.cardDepartment}>{card.department}</p>
          <p className={styles.cardEmail}>{card.email}</p>
          <p className={styles.cardComment}>{card.comment}</p>
        </div>
      </div>
    </li>
  );
};

const getStyles = (theme) => {
  switch (theme) {
    case "dark":
      return styles.dark;
    case "light":
      return styles.light;
    case "colorful":
      return styles.colorful;
    default:
      throw new Error(`${theme}`);
  }
};

export default PreviewCard;
