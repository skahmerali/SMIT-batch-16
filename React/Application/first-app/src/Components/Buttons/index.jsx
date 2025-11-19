import React from 'react';
import './style.css';

export default function Button({ name }) {
  return (
    <div className='container'>
      <button className='btn'>
        {name}
      </button>
    </div>
  )
}
