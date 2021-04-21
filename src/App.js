import Login from './components/login/login';
import styles from './app.module.css';

function App({authService}) {

  console.log(process.env.REACT_APP_FIREBASE_API_KEY)
  return (
    <div className="App">

      <Login authService={authService}></Login>
      
    </div>
  );
}

export default App;
