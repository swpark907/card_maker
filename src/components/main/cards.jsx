import React from "react";
import Footer from "../Footer/footer";
import Header from "../Header/header";
import CardMaker from "./card.maker";
import CardPreview from "./card.preview";
import styles from "./cards.module.css";

const Cards = ({
  FileInput,
  authService,
  cardData,
  addCard,
  deleteCard,
  changeCard,
  cardRepository,
}) => {
  const onLogout = () => {
    authService.logout();
  };

  return (
    <section className={styles.cardSection}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <CardMaker
          FileInput={FileInput}
          cardData={cardData}
          addCard={addCard}
          deleteCard={deleteCard}
          changeCard={changeCard}
          cardRepository={cardRepository}
        />
        <CardPreview cardData={cardData} />
      </div>

      <Footer />
    </section>
  );
};

export default Cards;
