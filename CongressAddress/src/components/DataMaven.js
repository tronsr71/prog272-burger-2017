import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import ElfHeader from './ElfHeader';
import ElfMenu from './ElfMenu';
import AddressShow from './AddressShow';
import AddressEdit from './AddressEdit';
import SmallNumbers from './SmallNumbers';

import { getByIndex } from '../assets/elf-local-storage';
import { saveByIndex } from '../assets/elf-local-storage';

import Logger from '../assets/elf-logger';
const logger = new Logger('data-loader', 'yellow', 'green', '18px');
import DataLoader from '../assets/DataLoader';
const dataLoader = new DataLoader();

class DataMaven extends Component {

  constructor(props) {
    super(props);

    logger.log('DataMaven Constructor is being called');
    this.onAddressChange = this.onAddressChange.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.addressIndex = 0;

    const that = this;
    dataLoader.loadAddresses(function(addressCount) {
      if (!addressCount) {
        throw new Error('Cannot get address count in DataMaven.js');
      }
      that.addressCount = addressCount;
    });

    const address = getByIndex(this.addressIndex);
    this.state = {
      address: address
    };
  } // End DataMaven Constructor

  onAddressChange(event) {

    // we increment our adddress index here
    if (event.target.id.includes('Next')) {
      if (this.addressIndex !== this.addressCount - 1) {
        this.addressIndex += 1;
      } else { // we do this to go from end to beginning
        this.addressIndex = 0;
      }
    }

    // we decrement our adddress index here
    else {
      if (this.addressIndex !== 0) {
        this.addressIndex -= 1;
      } else { // we do this to go from beginning to end
        this.addressIndex = this.addressCount - 1;
      }
    }

    //console.log('address index: ' + this.addressIndex);
    const address = getByIndex(this.addressIndex);

    this.setState({
      address: address
    });

    //needed if using <button> inside a <form>
    //event.preventDefault();
  };

  onNameChange(event) {
    console.log('from onNameChange: index: ' + this.addressIndex);
    const address = getByIndex(this.addressIndex);
    switch (event.target.id) {
      case 'inputFirstName':
        address.firstName = event.target.value;
        break;
      case 'inputLastName':
        address.lastName = event.target.value;
        break;
      case 'inputStreet':
        address.street = event.target.value;
        saveByIndex(address, this.addressIndex);
        break;
      case 'inputCity':
        address.city = event.target.value;
        saveByIndex(address, this.addressIndex);
        break;
      case 'inputState':
        address.state = event.target.value;
        saveByIndex(address, this.addressIndex);
        break;
      case 'inputZip':
        address.zip = event.target.value;
        saveByIndex(address, this.addressIndex);
        break;
      case 'inputPhone':
        address.phone = event.target.value;
        break;
      case 'inputWebsite':
        address.website = event.target.value;
        break;
      case 'inputEmail':
        address.email = event.target.value;
        break;
      case 'inputContact':
        address.contact = event.target.value;
        break;

      default:
        throw new Error('OH NO! BAD CASE in Address onNameChange');
    }

    saveByIndex(address, this.addressIndex);

    this.setState({
      address: address
    });
  };

  render() {
    return (

      <Router>
        <div>
          <ElfHeader />
          <ElfMenu/>

          <Route exact path='/' render={(props) => (
            <AddressShow {...props}
                         address={this.state.address}
                         onAddressChange={this.onAddressChange}
            />
          )}/>
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
