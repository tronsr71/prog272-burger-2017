import React, { Component } from 'react';
import addresses from './AddressList';
import AddressShow from './AddressShow';
import '../css/App.css';

// TODO: Rename Address to EflfAddress
class Address extends Component {
  constructor(props) {
    super(props); // generic call for parent constructor

    console.log('Address constructor is being called');

    this.onAddressChange = this.onAddressChange.bind(this);
    this.onNameChange = this.onNameChange.bind(this);

    if (this.addressIndex === undefined) {
      console.log('we hit index undef');
      this.addressIndex = 0;
    }
    const address = addresses[this.addressIndex];
    this.state = {
      address: address
    };
    this.quiet = true;
  }

  onAddressChange(event) {

    // we increment our adddress index here
    if(event.target.id.includes('Next'))
    {
      if (this.addressIndex !== addresses.length - 1)
        this.addressIndex += 1;

      else // we do this to wrap around
        this.addressIndex = 0;
    }

    // we decrement our adddress index here
    else
    {
      if (this.addressIndex !== 0)
        this.addressIndex -= 1;

      else // we do this to wrap around
        this.addressIndex = addresses.length - 1;
    }

    console.log('address index: ' + this.addressIndex);

    const address = addresses[this.addressIndex];

    this.setState({
      address: address
    });
  };

  onNameChange(event) {
    //this.log("ON NAME CHANGE");
    console.log('from oNC: indrx: ' + this.addressIndex);
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

      default:
        throw new Error('OH NO BAD CASE in Address onNameChange');
    }

    this.setState({
      address: address
    });
  };

  render() {
    if (!this.quiet) { console.log("ADDRESS RENDER"); }
    return (
      <div id='addressRender' className='App'>
        <AddressShow
          address={this.state.address}
          onAddressChange={this.onAddressChange}
          // onPrevAddressChange={this.onNextAddressChange}
          // onNextAddressChange={this.onNextAddressChange}
        />
      </div>
    );
  }

  // getAddress = () => {
  //   this.addressIndex = 1;
  //   const address = addresses[this.addressIndex];
  //   this.setState({
  //     address: address
  //   })
  // };
  //
  // setAddress = (event) => {
  //   const firstAddress = this.props.address[1];
  //   this.setState({
  //     firstName: firstAddress.firstName,
  //     lastName: firstAddress.lastName,
  //     street: firstAddress.street,
  //     city: firstAddress.city,
  //     state: firstAddress.state,
  //     zip: firstAddress.zip,
  //     phone: firstAddress.phone,
  //     website: firstAddress.website
  //   })
  // };


} // End class Address


export default Address;
