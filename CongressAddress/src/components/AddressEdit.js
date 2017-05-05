import React, { Component } from 'react';
import '../css/App.css';


class AddressEdit extends Component {
  // constructor(props) {
  //   super(props);
  //   this.quiet = true;
  //   this.log('CONSTRUCTOR', this.props.address);
  // }

  // log(message, message2 = '', message3 = '') {
  //
  //   if (!this.quiet) {
  //     const label = this.constructor.name + ': ';
  //     console.log(label, message, message2, message3);
  //   }
  // }

  render() {

    //this.log("RENDER");

    return (
      <div id="addressShowRender" className="App">

        <input id="inputFirstName" className="App-intro" value={this.props.address.firstName} onChange={this.props.onNameChange}/> <br />
        <input id="inputLastName" className="App-intro" value={this.props.address.lastName} onChange={this.props.onNameChange}/>  <br />
        <input id="inputStreet" className="App-intro" value={this.props.address.street} onChange={this.props.onNameChange}/>  <br />
        <input id="inputCity" className="App-intro" value={this.props.address.city} onChange={this.props.onNameChange}/>  <br />
        <input id="inputState" className="App-intro" value={this.props.address.state} onChange={this.props.onNameChange}/>  <br />
        <input id="inputZip" className="App-intro" value={this.props.address.zip} onChange={this.props.onNameChange}/>  <br />
        <input id="inputPhone" className="App-intro" value={this.props.address.phone} onChange={this.props.onNameChange}/>  <br />
        <input id="inputWebsite" className="App-intro" value={this.props.address.website} onChange={this.props.onNameChange}/>  <br />

        <button id="showAddressClick" onClick={this.props.onAddressChange}>Edit Address</button>

      </div>
    );
  }

} // End class AddressEdit


export default AddressEdit;
