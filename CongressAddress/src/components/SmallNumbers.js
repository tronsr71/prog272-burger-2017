import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '../css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
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
      <form className='navbar-form' action=''>
        <div id='smallNumbers' className='row'>
          <div className='ContentBG'>

            <div className='Content'>
              <label id='numbersLabel'>Num: </label>
              <span id='numbersText'>{this.state.nine}</span>
            </div>

            <div className='FooterButtonsContainer'>
              <Button
                bsStyle='primary'
                id='btnSmallNumbers' className='FooterButtons'
                onClick={this.getNine}>Get Nine
              </Button>
            </div>

          </div>
        </div>
      </form>
    );
  }
}

export default App;
