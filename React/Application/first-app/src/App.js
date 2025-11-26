// import ahmer from './logo.svg';
// import './App.css';

import Home from "./Components/Home";
import Navbar from "./Components/Navbar/Navbar";

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
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
