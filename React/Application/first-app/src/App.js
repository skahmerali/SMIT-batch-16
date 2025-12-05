// import ahmer from './logo.svg';
// import './App.css';

import Counter from "./Components/counter";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar/Navbar";
import Room from "./Components/Room";
import UserData from "./Container/UserData";

function App({ children }) {
  // var ahmer = "ahmer"
  return (
    <div width="100%">
      {/* Class-1 code 
       <div> 
       <div>
          Hello world!!!
        </div> 

       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
        className="App-link"
        href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React
          </a>
          </header> 
       </div> 
       <div>
        bye bye world!!!
      </div>  */}
      {/* {children} */}
      {/* <Navbar />
      <Home /> */}
      {/* <Room /> */}
      {/* <Counter /> */}
      <UserData />
    </div>
  );
}

export default App;
