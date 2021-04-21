import React from 'react';
import Footer from '../Footer/footer';
import Header from '../Header/header';
import Authentic from './authentic';
import 'firebase/auth';
import 'firebase/firestore'


const Login = (props) => (
        <div className="login-modal">

            <Header></Header>
            <Authentic></Authentic>
            <Footer></Footer>


        </div>
    );

export default Login;