import React, { useState } from 'react';

// useState is a React Hook that allows functional components to manage and update component-specific state. It enables components to "remember" values between renders.

export default function Home() {
    let [userName, setUserName] = useState("ahmer");
    // let userName = "ahmer";
    // userName = "ali";
    // userName = document.getElementById("userName").value;
    function handlerChange(e) {
        console.log(e.target.value);
        setUserName(e.target.value);
    }

    return (
        <div>
            <div className="result">
                {/* ternarry opperator */}
                {userName === "ahmer" ? `hello ${userName}` : userName}
            </div>
            <input type="text" id='userName' onChange={handlerChange} />
        </div>
    )
}
