import React, { useState } from 'react';
import './style.css';

export default function Room() {
    const [isLight, setLight] = useState(true);
    return (
        // className='light' || className='dark'
        // if(isLight) { className = "light" }else{ className= "dark"}
        <div className={isLight ? 'light' : "dark"}>
            Here is {isLight ? "Light Room" : "Dark Room"}
            <button onClick={() => { setLight(!isLight) }}>change into{isLight ? ' dark' : " bright"} </button>
        </div>
        
    )
}
