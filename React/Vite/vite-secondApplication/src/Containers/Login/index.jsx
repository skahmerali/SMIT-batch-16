import { useState } from "react";
import { useNavigate } from "react-router";
import { userContextData } from "../context/auth/authContext";
import { loginUser } from "../../services/auth/loginAuth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = userContextData();
  let navigate = useNavigate();
  const handleLogin = async () => {
    try {
      console.log(email, password);
      const result = await loginUser({ email, password });
      console.log(result);
      login(result.dbUser);
      navigate('/setting');
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
