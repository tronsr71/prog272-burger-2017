import React, { Component } from 'react';
import '../App.css';

class App extends Component {
  constructor() {
    super(); // generic call for constructor
    this.state = {
        nine: '0'
    }

  }

  getNine = () => {
    //alert("bar was called");
    this.setState({ nine: '9' });
  }

  render() {
    return (
      <div className="App">
        <p className="App-intro">
          Nine: {this.state.nine}
        </p>
        <button id="appBtn" onClick={this.getNine}>Get Nine</button>
      </div>
    );
  }
}

export default App;
