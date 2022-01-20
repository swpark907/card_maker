import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthService from './service/auth.service';
import ImageUploader from './service/image_uploader';
import ImageFileInput from './components/image_file_input/image_file_input';
import CardRepository from './service/card_repository';

const cardRepository = new CardRepository();
const authService = new AuthService();
const imageUploader = new ImageUploader();
const FileInput = props => (
  <ImageFileInput {...props} imageUploader = {imageUploader} />
)


ReactDOM.render(
  <React.StrictMode>
    <App FileInput={FileInput} authService={authService} cardRepository={cardRepository}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
