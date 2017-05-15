import 'whatwg-fetch';
import React, { Component } from 'react';
import addresses from './AddressList';
import AddressShow from './AddressShow';
import '../css/App.css';
import Logger from '../assets/elf-logger';
const logger = new Logger('data-loader', 'yellow', 'green', '18px');

class Address extends Component {
  constructor(props) {
    //console.log('Address constructor is being called');
    super(props); // generic call for parent constructor

    logger.log('Address Constructor is being called');
    this.onAddressChange = this.onAddressChange.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.addressIndex = 0;
    var address = addresses[this.addressIndex];
    this.state = {
      address: address
    };
    this.quiet = true;
  }

  // fetch('./addresses.json').then(function(data) {
  //   const addresses = data.json();
  //   console.log(addresses);
  //   return addresses;
  // }).then(function (data) {
  //   console.log(JSON.stringify(data, null, 4));
  //   that.addresses = data;
  //   that.setLocalStorage();
  // }).catch(function (err) {
  //   logger.log(err);
  // })


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
    if (!this.quiet) { console.log('ADDRESS RENDER'); }
    return (
      <div id='addressRender' className='App'>
        <AddressShow
          address={this.state.address}
          onAddressChange={this.onAddressChange}
        />
      </div>
    );
  };
} // End class Address

export default Address;
