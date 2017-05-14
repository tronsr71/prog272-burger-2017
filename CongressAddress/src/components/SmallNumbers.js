import React, { Component } from 'react';
import '../css/App.css';

class App extends Component {
  constructor() {
    super(); // generic call for parent constructor
    this.getNine = this.getNine.bind(this);

    this.state = {
      nine: '0'
    };

  }

  getNine() {
    this.setState({nine: '9'});
  };

  render() {
    return (
      <div id='smallNumbers' className='App'>
        <div className='ContentBG'>

          <div className='Content'>
            <label id='numbersLabel'>Num: </label>
            <span id='numbersText'>{this.state.nine}</span>
          </div>

          <div className='FooterButtonsContainer'>
            <button id='btnSmallNumbers' className='FooterButtons' onClick={this.getNine}>Get Nine</button>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
