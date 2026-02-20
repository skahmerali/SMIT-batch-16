import { useState } from 'react'
// import './App.css'
import { BrowserRouter } from 'react-router-dom';
import SignupForm from './SignUp/SignUp'
import LoginForm from './login/login'
import Router from './router/router';
import Navbar from './Navbar/Navbar';

// craeate routing for all pages and if the between Home(website customer facing), Signup , login and dashboard. Now if the employe login with its credential so need to show authorized view and if the admin login so that view should be different 
function App() {
    return (

        <BrowserRouter>
        <Navbar />
        
        <>
        <Router />
        
        {/* <SignupForm />
        <LoginForm /> */}
        </>
        </BrowserRouter>
    )
}

export default App
