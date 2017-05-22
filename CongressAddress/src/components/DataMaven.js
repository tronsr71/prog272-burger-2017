import React, {Component} from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Address from '../components/Address';
import AddressEdit from '../components/AddressEdit';
import SmallNumbers from '../components/SmallNumbers';
import ElfHeader from '../components/ElfHeader';
import ElfMenu from '../components/ElfMenu';

class DataMaven extends Component {

  render() {
    return (

    <Router>
      <div>
        <ElfHeader />
        <ElfMenu/>

        <Route exact path='/' component={Address}/>
        <Route path='/edit' render={(props) => (
          <AddressEdit {...props}
                       address={this.state.address}
                       onAddressChange={this.onAddressChange}
                       onNameChange={this.onNameChange}
          />
        )}/>
        <Route path='/small' component={SmallNumbers}/>

      </div>

    </Router>

  );
  }
}

export default DataMaven;
