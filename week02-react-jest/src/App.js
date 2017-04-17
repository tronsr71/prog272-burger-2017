import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super(); // generic call for constructor
    this.state = {
        nine: '0'
    }

  }

  bar = () => {
    //alert("bar was called");
    this.setState({ nine: '9' });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Hell</h2>
        </div>
        <p className="App-intro">
          Nine: {this.state.nine}
        </p>

          <button className="elf" onClick = {this.bar}>Get Nine</button>
      </div>
    );
  }
}

export default App;
