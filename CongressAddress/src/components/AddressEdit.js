import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '../css/App.css';

class AddressEdit extends Component {
  constructor(props) {
    super(props);
    this.quiet = true;
  }

  render() {

    return (
      <form className='navbar-form' action=''>
        <div id='addressEditRender' className='row'>
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
              <Button
                bsStyle='primary'
                id='showPrevAddressClick' className='FooterButtons'
                onClick={this.props.onAddressChange}>Get Prev Address
              </Button>

              <Button
                bsStyle='primary'
                id='showNextAddressClick' className='FooterButtons'
                onClick={this.props.onAddressChange}>Get Next Address
              </Button>

              <Button
                bsStyle='primary'
                id='refreshDataClick' className='FooterButtons'
                onClick={this.props.onRefreshData}>Refresh from DB
              </Button>
            </div>
          </div>
        </div>
      </form>
    );
  }

} // End class AddressEdit


export default AddressEdit;
