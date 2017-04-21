import React from 'react';
import ReactDOM from 'react-dom';

import ElfHeader from './components/ElfHeader';
import App from './components/App';
import Address from './components/Address';

import addresses from './AddressList';
import './index.css';


ReactDOM.render(
  <div>
    <ElfHeader/>
    <App />
    <Address address={addresses} />
  </div>,
  document.getElementById('root')
);
