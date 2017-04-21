import React, { Component } from 'react';
import '../App.css';


class Address extends Component {
  constructor(props) {
    super(props); // generic call for parent constructor
    //console.log('TEST PROPS', props);
    console.log('constructor is being called');

    if (!this.props.address) {
      throw "No props in Address. You must pass in props";
    }

    const defaultAddress = this.props.address[0];
    this.state = {
      firstName: defaultAddress.firstName,
      lastName: defaultAddress.lastName,
      street: defaultAddress.street,
      city: defaultAddress.city,
      state: defaultAddress.state,
      zip: defaultAddress.zip,
      phone: defaultAddress.phone,
      website: defaultAddress.website
    }

  }

  setAddress = () => {
    const firstAddress = this.props.address[1];
    this.setState({
      firstName: firstAddress.firstName,
      lastName: firstAddress.lastName,
      street: firstAddress.street,
      city: firstAddress.city,
      state: firstAddress.state,
      zip: firstAddress.zip,
      phone: firstAddress.phone,
      website: firstAddress.website
    })
  };


  render() {
    return (
      <div className="App">
        <p className="App-intro">firstName: {this.state.firstName}</p>
        <p className="App-intro">lastName: {this.state.lastName}</p>
        <p className="App-intro">street: {this.state.street}</p>
        <p className="App-intro">city: {this.state.city}</p>
        <p className="App-intro">state: {this.state.state}</p>
        <p className="App-intro">zip: {this.state.zip}</p>
        <p className="App-intro">phone: {this.state.phone}</p>
        <p className="App-intro">website: {this.state.website}</p>

        <button id="getAddressBtn" onClick={this.setAddress}>Get Address</button>

      </div>
    );
  }
}


export default Address;
