import React from 'react';
import './style.css';
import Button from '../Buttons';

export default function Navbar() {
  return (
    <div className='container'>
      <div className="img">
        <img src="https://static.vecteezy.com/system/resources/previews/008/296/267/non_2x/colorful-swirl-logo-design-concept-illustration-vector.jpg" alt="" className="logo" />
      </div>
      <ul className='items-center'>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
      <div className="buttons">
        <Button name='signup' />
        <Button name='login' />
      </div>
    </div>
  )
}
