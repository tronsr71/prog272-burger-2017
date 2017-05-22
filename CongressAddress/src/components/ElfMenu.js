import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../css/App.css';

class ElfMenu extends Component {

  render() {
    return (
      <div className='App MenuBar'>
          <span className='MenuItems'><Link to='/'>AddressShow</Link></span>
          <span className='MenuItems'><Link to='/edit'>AdressEdit</Link></span>
          <span className='MenuItems'><Link to='/small'>SmallNumbers</Link></span>
      </div>
    );
  }
}

export default ElfMenu;

