import {useState} from 'react';
import app from "../firebase";
import {getAuth , signInWithEmailAndPassword} from "firebase/auth";

const auth = getAuth(app);

export default function Login() {
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    const loginSetup =async ()=>{
        try{
         await signInWithEmailAndPassword(auth , email , password)
        .then(()=>{
            alert("user successfully logged in");
        })
    } catch(err){
        console.log(err);   
    }
}
  return (
    <div>
      <h1>login Page</h1>
      <input type="text" placeholder='Email' onChange={e =>{setEmail(e.target.value)}} value={email}/>
      <input type="password" placeholder='Password' onChange={e =>{setPassword(e.target.value)}} value={password} />
      <button onClick={loginSetup}>Login</button>
    </div>
  )
}
