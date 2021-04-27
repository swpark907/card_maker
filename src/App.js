import Login from './components/login/login';
import styles from './app.module.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cards from './components/main/cards';
import { useState } from 'react';

function App({authService}) {
  
  const [cardData, setCardData] = useState([
      {
        name: '이름',
        company: 'Samsung',
        department: 'Softwear Engineer',
        position: '직위',
        theme: 'dark',
        email: 'asdf@asdfasdfa.asdf',
        comment: 'asdfasfas',
        fileURL: null,
      },
      {
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
    console.log(newCard);
    const updated = [...cardData, newCard];
    setCardData(updated);
  }

  

  return (
    <div className={styles.app}>
      <BrowserRouter>
      <Switch>
          <Route exact path='/'>
            <Login authService={authService}></Login>
          </Route>
          <Route exact path='/cards'>
            <Cards authService={authService} cardData={cardData} addCard={addCard}></Cards>
          </Route>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
