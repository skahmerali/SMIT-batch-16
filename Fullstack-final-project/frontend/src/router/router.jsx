import { Routes, Route } from 'react-router-dom';
import SignupForm from '../SignUp/SignUp';
import LoginForm from '../login/login';
import Home from '../Home/Home';
import React from 'react'

function Router() {
  return (
    <div>
        <Routes>
            <Route  path="/" element={<Home />}/>
            <Route  path="/signup" element={<SignupForm />}/>
            <Route  path="/login" element={<LoginForm />}/>
        </Routes>
      
    </div>
  )
}

export default Router
