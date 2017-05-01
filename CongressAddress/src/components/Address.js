import React, { Component } from 'react';
import addresses from './AddressList';
import AddressShow from './AddressShow';
import '../css/App.css';


class Address extends Component {
  constructor(props) {
    super(props); // generic call for parent constructor

    console.log('Address constructor is being called');

    // if (!this.props.address) {
    //   //throw "No props in Address. You must pass in props";
    //   throw new Error("No props in Address. You must pass in props.");
    // }

    this.addressIndex=0;
    const address = addresses[this.addressIndex];
    this.state = {
      address: address
    };
    this.quiet = true;

  }

  onAddressChange = (event) => {
    this.addressIndex = 1;
    const address = addresses[this.addressIndex];

    this.setState({
      address: address
    })
  };


  // setAddress = () => {
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


  render() {
    if (!this.quiet) { console.log("ADDRESS RENDER"); }
    return (
      <div id="addressRender" className="App">
        <AddressShow
          address={this.state.address}
          onAddressChange={this.onAddressChange}
        />
      </div>
    );
  }

} // End class Address


export default Address;
