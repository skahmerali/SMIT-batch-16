import { useState } from 'react'
// import './App.css'
import { BrowserRouter } from 'react-router-dom';
import SignupForm from './SignUp/SignUp'
import LoginForm from './login/login'
import Router from './router/router';
import Navbar from './Navbar/Navbar';

// craeate routing for all pages and if the between Home(website customer facing), Signup , login and dashboard. Now if the employe login with its credential so need to show authorized view and if the admin login so that view should be different 
// Integrate the Get /products API so we can render all products in home page and after login and signup admin can Perform the CRUD of Products and also render the dashboard view.

// Friday: 27-02-2026
// create a frontend logic and view for adding, deleting and editing the products this is only for admin so its view perfactly define as a dashboard
// if the role is endUser so when the person is login only renders the profile view and if the role is admin so the view is dashboard.

// Monday 02-03-2026
// render the user details in dashboard so only admin can see these details
// enduser can see the all products and order the products when order is sucessfully done so these details show into the dashboard who is ordering, user address,user details and complete hirarchey of order.



function App() {
    return (

        <BrowserRouter>
            <Navbar />
            <Router />
            {/* <SignupForm />
        <LoginForm /> */}
        </BrowserRouter>
    )
}

export default App
