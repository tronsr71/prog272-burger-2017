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
import AddressChanger from './AddressChanger';
import addresses from './AddressList';
import Logger from '../assets/elf-logger';
const logger = new Logger('data-loader', 'yellow', 'green', '18px');
import DataLoader from '../assets/DataLoader';
const dataLoader = new DataLoader();


class DataMaven extends Component {

  constructor(props) {
    super(props);

    logger.log('Address Constructor is being called');
    this.onAddressChange = this.onAddressChange.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.addressIndex = 0;
    var address = addresses[this.addressIndex];
    this.state = {
      address: address
    };
    this.quiet = true;

    const that = this;
    dataLoader.loadAddresses(function(addressCount) {
      if (!addressCount) {
        throw new Error('Cannot get address count in DataMaven.js');
      }
      that.addressCount = addressCount;
    });


  }


  onAddressChange(event) {

    // we increment our adddress index here
    if (event.target.id.includes('Next')) {
      if (this.addressIndex !== addresses.length - 1) {
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
        this.addressIndex = addresses.length - 1;
      }
    }

    //console.log('address index: ' + this.addressIndex);
    const address = addresses[this.addressIndex];

    this.setState({
      address: address
    });
  };

  onNameChange(event) {
    console.log('from onNameChange: index: ' + this.addressIndex);
    const address = addresses[this.addressIndex];
    switch (event.target.id) {
      case 'inputFirstName':
        address.firstName = event.target.value;
        //saveByIndex(address, this.addressIndex);
        break;
      case 'inputLastName':
        address.lastName = event.target.value;
        break;
      case 'inputStreet':
        address.street = event.target.value;
        break;
      case 'inputCity':
        address.city = event.target.value;
        break;
      case 'inputState':
        address.state = event.target.value;
        break;
      case 'inputZip':
        address.zip = event.target.value;
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
          <Address {...props}
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
