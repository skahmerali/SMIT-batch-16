import { useState } from "react";
import {userContextData} from "../context/auth/authContext";
import { loginUser } from "../../services/auth/loginAuth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = userContextData();
  const handleLogin = async () => {
    try {
      console.log(email, password);
      const result = await loginUser({email, password});
      console.log(result);
      //   login(result.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <input value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
