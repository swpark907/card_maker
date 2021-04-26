import Login from './components/login/login';
import styles from './app.module.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cards from './components/main/cards';

function App({authService}) {
  
  const cardData = [
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
      
  ]

  

  return (
    <div className={styles.app}>
      <BrowserRouter>
      <Switch>
          <Route exact path='/'>
            <Login authService={authService}></Login>
          </Route>
          <Route exact path='/cards'>
            <Cards authService={authService} cardData={cardData}></Cards>
          </Route>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
