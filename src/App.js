import React, { Component } from "react";
import Main from './components/mainComponent'
import Header from './components/header'
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
               <div>
             <nav className='nav-container'>
                <a href="/" className="home" style={{float:'left'}}>My Bank</a>
                <a href="/" className="link1 active">Home</a>
                <a href="/" className="link2">About Us</a>
                <a href="/" className="link3">Contact Us</a>
            </nav>
            <div className='jumbo'>
              <h4>  My Bank</h4>
            <p>Lorem coptio dolores ducimus, odit dolorum blanditiis aliquid tenetur mollitia eligendi, quidem reprehenderit ut cum quae.

            </p>
            </div>
        </div>
          <Main />
      </div>
    );
  }
}

export default App;
