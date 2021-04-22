import Login from './components/login/login';
import styles from './app.module.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cards from './components/main/cards';

function App({authService}) {
  
  return (
    <div className={styles.app}>
      <BrowserRouter>
      <Switch>
          <Route exact path='/'>
            <Login authService={authService}></Login>
          </Route>
          <Route exact path='/cards'>
            <Cards authService={authService}></Cards>
          </Route>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
