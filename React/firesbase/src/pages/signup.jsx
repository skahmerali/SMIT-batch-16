import {useState} from 'react';
import app from "../firebase";
import {getAuth , createUserWithEmailAndPassword} from "firebase/auth";

const auth = getAuth(app);

export default function Signup() {
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    const signupUser =async ()=>{
        try{
         await createUserWithEmailAndPassword(auth , email , password)
        .then(()=>{
            alert("user successfully created");
            navigator('/login');
        })
    } catch(err){
        console.log(err);   
    }
}
  return (
    <div>
      <h1>Signup Page</h1>
      <input type="text" placeholder='Email' onChange={e =>{setEmail(e.target.value)}} value={email}/>
      <input type="password" placeholder='Password' onChange={e =>{setPassword(e.target.value)}} value={password} />
      <button onClick={signupUser}>Sign Up</button>
    </div>
  )
}
