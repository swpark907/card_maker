import Login from './components/login/login';
import styles from './app.module.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cards from './components/main/cards';
import { useState } from 'react';

function App({FileInput, authService}) {
  
  const [cardData, setCardData] = useState([
      {
        id:1,
        name: '이름',
        company: 'Samsung',
        department: 'Software Engineer',
        position: '직위',
        theme: 'dark',
        email: 'asdf@asdfasdfa.asdf',
        comment: 'asdfasfas',
        fileURL: null,
      },
      {
        id:2,
        name: '이름',
        company: '회사',
        department: '부서',
        position: '직위',
        theme: 'colorful',
        email: 'asdf@asdfasdfa.asdf',
        comment: 'asdfasfas',
        fileURL: 'images/logo.png',
        },
      
  ])
    
  const addCard = (newCard) => {    
    const updated = [...cardData, newCard];    
    setCardData(updated);
  }

  const deleteCard = (event) => {
    
    event.preventDefault();
    
    const result = cardData.filter( (card) => {
      return(card.id !== parseInt(event.target.dataset.id))
    } );

    const updated = result;
    setCardData(updated);
    
  }

  const changeCard = (card) => {
    
    const updated = cardData.map(cards => {
      if(card.id === cards.id){
        return card;
      }      
      return cards;
    }
    )      
    setCardData(updated);    
  }

  

  return (
    <div className={styles.app}>
      <BrowserRouter basename="/card_maker">
      <Switch>
          <Route exact path='/'>
            <Login authService={authService}></Login>
          </Route>
          <Route exact path='/cards'>
            <Cards FileInput={FileInput} authService={authService} cardData={cardData} addCard={addCard} deleteCard={deleteCard} changeCard={changeCard} ></Cards>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
