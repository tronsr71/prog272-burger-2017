import React, { Component } from 'react';
import logo from '../images/BK_Logo.svg';
import { Jumbotron } from 'react-bootstrap';
import '../css/App.css';

class ElfHeader extends Component {

  render() {
    return (
      <Jumbotron>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Congress Contacts</h2>
        </div>
      </Jumbotron>
    );
  }
}

export default ElfHeader;
