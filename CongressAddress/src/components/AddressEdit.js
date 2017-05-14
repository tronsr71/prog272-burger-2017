import React, { Component } from 'react';
import '../css/App.css';

//import addresses from './AddressList';

class AddressEdit extends Component {
  constructor(props) {
    super(props);
    this.quiet = true;
  }

  // log(message, message2 = '', message3 = '') {
  //
  //   if (!this.quiet) {
  //     const label = this.constructor.name + ': ';
  //     console.log(label, message, message2, message3);
  //   }
  // }

  render() {

    //this.log('RENDER');

    return (
      <div id='addressEditRender'>
        <div className='ContentBG'>
          <div className='Content'>
            <label className='AddressLabels'>First Name: </label>
            <input id='inputFirstName' className='AddressEditFields'
                   value={this.props.address.firstName}
                   onChange={this.props.onNameChange}/> <br />
            <label className='AddressLabels'>Last Name: </label>
            <input id='inputLastName' className='AddressEditFields'
                   value={this.props.address.lastName}
                   onChange={this.props.onNameChange}/>  <br />
            <label className='AddressLabels'>Street: </label>
            <input id='inputStreet' className='AddressEditFields'
                   value={this.props.address.street}
                   onChange={this.props.onNameChange}/>  <br />
            <label className='AddressLabels'>City: </label>
            <input id='inputCity' className='AddressEditFields'
                   value={this.props.address.city}
                   onChange={this.props.onNameChange}/>  <br />
            <label className='AddressLabels'>State: </label>
            <input id='inputState' className='AddressEditFields'
                   value={this.props.address.state}
                   onChange={this.props.onNameChange}/>  <br />
            <label className='AddressLabels'>Zip Code: </label>
            <input id='inputZip' className='AddressEditFields'
                   value={this.props.address.zip}
                   onChange={this.props.onNameChange}/>  <br />
            <label className='AddressLabels'>Phone: </label>
            <input id='inputPhone' className='AddressEditFields'
                   value={this.props.address.phone}
                   onChange={this.props.onNameChange}/>  <br />
            <label className='AddressLabels'>Website: </label>
            <input id='inputWebsite' className='AddressEditFields'
                   value={this.props.address.website}
                   onChange={this.props.onNameChange}/>  <br />
            <label className='AddressLabels'>Email: </label>
            <input id='inputEmail' className='AddressEditFields'
                   value={this.props.address.email}
                   onChange={this.props.onNameChange}/>  <br />
            <label className='AddressLabels'>Contact: </label>
            <input id='inputContact' className='AddressEditFields'
                   value={this.props.address.contact}
                   onChange={this.props.onNameChange}/>  <br />
          </div>

          <div className='FooterButtonsContainer'>
            <button id='showPrevAddressClick' className='FooterButtons'
                    onClick={this.props.onAddressChange}>Get Prev Address</button>
            <button id='showNextAddressClick'  className='FooterButtons'
                    onClick={this.props.onAddressChange}>Get Next Address</button>
          </div>
        </div>
      </div>
    );
  }

} // End class AddressEdit


export default AddressEdit;
