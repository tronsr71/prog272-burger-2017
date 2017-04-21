import React, { Component } from 'react';
//import logo from '../logo.svg';
import logo from '../BK_Logo.svg';
import '../App.css';

class ElfHeader extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to the Jungle</h1>
        </div>
      </div>
    );
  }
}

export default ElfHeader;
