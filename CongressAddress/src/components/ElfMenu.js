
import React, {Component} from 'react';
import Address from './Address';
import AddressChanger from './AddressChanger';
import SmallNumbers from './SmallNumbers';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import '../css/App.css';

class ElfMenu extends Component {

  render() {
    return (
      <Router>
        <div>
          <div className="App">
            <ul>
              <li><Link to="/">AddressShow</Link></li>
              <li><Link to="/edit">AdressEdit</Link></li>
              <li><Link to="/small">SmallNumbers</Link></li>
            </ul>
          </div>

          <Route exact path="/" component={Address}/>
          <Route path="/edit" component={AddressChanger}/>
          <Route path="/small" component={SmallNumbers}/>

        </div>

      </Router>
    );
  }
}

export default ElfMenu;

