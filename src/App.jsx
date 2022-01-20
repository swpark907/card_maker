import Login from "./components/login/login";
import styles from "./app.module.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cards from "./components/main/cards";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function App({ FileInput, authService, cardRepository }) {
  const history = useHistory();
  const historyState = history?.location?.state;
  const [cardData, setCardData] = useState({});
  const [userId, setUserId] = useState(historyState && historyState.id);


  const createOrUpdatedCard = card => {
    setCardData(cardData => {
      const updated = {...cardData};
      updated[card.id] = card;
      return updated;
    })
    console.log(userId);
    console.log(cardData);
    cardRepository.saveCard(userId, card);
  }

  const deleteCard = (card) => {
    setCardData(cardData => {
      const updated = {...cardData};
      delete updated[card.id];
      return updated;
    })

    cardRepository.removeCard(userId, card);
  };


  return (
    <div className={styles.app}>
      <BrowserRouter basename="/card_maker">
        <Switch>
          <Route exact path="/">
            <Login authService={authService} setUserId={setUserId}></Login>
          </Route>
          <Route exact path="/cards">
            <Cards
              FileInput={FileInput}
              authService={authService}
              cardData={cardData}
              addCard={createOrUpdatedCard}
              deleteCard={deleteCard}
              changeCard={createOrUpdatedCard}
              cardRepository={cardRepository}
            ></Cards>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
