import React, {Component} from 'react';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Address from '../components/Address';

class DataMaven extends Component {

  render() {
    return (

      <Router>
        <Route exact path='/' component={Address}/>

      </Router>
    );
  }
}

export default DataMaven;
