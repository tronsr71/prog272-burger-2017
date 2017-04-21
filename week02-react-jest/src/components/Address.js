import React, { Component } from 'react';
import '../App.css';

class Address extends Component {
  constructor(props) {
    super(props); // generic call for parent constructor
    console.log('TEST PROPS', props);

    if (!this.props.address) {
      throw "No props in Address. You must pass in props";
    }

    const defaultAddress=0;
    this.state = {
      firstName: this.props.address[defaultAddress].firstName,
      lastName: this.props.address[defaultAddress].lastName,
      street: this.props.address[defaultAddress].street,
      city: this.props.address[defaultAddress].city,
      state: this.props.address[defaultAddress].state,
      zip: this.props.address[defaultAddress].zip,
    }

  }

  setAddress = () => {
    const firstAddress=1;
    this.setState({
      firstName: this.props.address[firstAddress].firstName,
      lastName: this.props.address[firstAddress].lastName,
      street: this.props.address[firstAddress].street,
      city: this.props.address[firstAddress].city,
      state: this.props.address[firstAddress].state,
      zip: this.props.address[firstAddress].zip,
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

        <button id="getAddressBtn" onClick={this.setAddress}>Get Address</button>
      </div>
    );
  }
}


export default Address;
