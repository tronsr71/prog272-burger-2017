import React, { Component } from 'react';
import logo from '../images/BK_Logo.svg';
import {  Jumbotron } from 'react-bootstrap';
import '../css/App.css';


class ElfHeader extends Component {

  render() {
    return (
      <div className='App'>

        <Jumbotron>
          <div className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <h1>Welcome to Congress Contacts</h1>
          </div>
        </Jumbotron>

      </div>
    );
  }
}

export default ElfHeader;
