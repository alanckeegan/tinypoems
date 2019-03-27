import React, { Component } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar">
          <h1 className="navLink">
              Home
          </h1>
          <h1 className="navLink">
            Projects
          </h1>
          <h1 className="navLink">
            Contact
          </h1>
        </div>
      </div>
    );
  }
}

export default App;
