import React, { Component } from 'react';
import '../css/App.css';


class AddressShow extends Component {
  constructor(props) {
    super(props);
    this.quiet = true;
    this.log('CONSTRUCTOR', this.props.address);
  }

  log(message, message2 = '', message3 = '') {

    if (!this.quiet) {
      const label = this.constructor.name + ': ';
      console.log(label, message, message2, message3);
    }

  }

  render() {
    this.log("RENDER");

    return (
      <div id="addressShowRender" className="App">
        <p className="App-intro">firstName: {this.props.address.firstName}</p>
        <p className="App-intro">lastName: {this.props.address.lastName}</p>
        <p className="App-intro">street: {this.props.address.street}</p>
        <p className="App-intro">city: {this.props.address.city}</p>
        <p className="App-intro">state: {this.props.address.state}</p>
        <p className="App-intro">zip: {this.props.address.zip}</p>
        <p className="App-intro">phone: {this.props.address.phone}</p>
        <p className="App-intro">website: {this.props.address.website}</p>

        <button id="showPrevAddressClick" >Get Prev Address (not working)</button>
        <button id="showNextAddressClick" onClick={this.props.onAddressChange}>Get Next Address</button>

      </div>
    );
  }

} // End class AddressShow


export default AddressShow;
