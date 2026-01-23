// import { useState } from "react";
import { RouterProvider } from "react-router";
import router from "./router";
import "./App.css";
// import Home from "./Containers/Home";
// import About from "./Containers/About/index";
// import CounerResult from "./Containers/CounterResult";
import { AuthContext } from "./Containers/context/auth/authContext";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      {/* <Home />
      <About /> */}
      {/* <CounerResult /> */}
      {/* <ul>
        <li><Link to="home">Home</Link></li>
        <li><Link to="">About</Link></li>
      </ul> */}
      <AuthContext>
        <RouterProvider router={router} />
      </AuthContext>
    </>
  );
}

export default App;
