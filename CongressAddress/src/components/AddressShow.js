import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
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
    this.log('RENDER AddressShow');

    return (
      <form className='navbar-form' action=''>
        <div id='addressShowRender' className='row'>
          <div className='ContentBG'>
            <div className='Content'>
              <label className='AddressLabels'>First Name: </label>
              <span className='AddressShowFields'>{this.props.address.firstName}</span><br />
              <label className='AddressLabels'>Last Name: </label>
              <span className='AddressShowFields'>{this.props.address.lastName}</span><br />
              <label className='AddressLabels'>Street: </label>
              <span className='AddressShowFields'>{this.props.address.street}</span><br />
              <label className='AddressLabels'>City: </label>
              <span className='AddressShowFields'>{this.props.address.city}</span><br />
              <label className='AddressLabels'>State: </label>
              <span className='AddressShowFields'>{this.props.address.state}</span><br />
              <label className='AddressLabels'>Zip Code: </label>
              <span className='AddressShowFields'>{this.props.address.zip}</span><br />
              <label className='AddressLabels'>Phone: </label>
              <span className='AddressShowFields'>{this.props.address.phone}</span><br />
              <label className='AddressLabels'>Website: </label>
              <span className='AddressShowFields'>{this.props.address.website}</span><br />
              <label className='AddressLabels'>Email: </label>
              <span className='AddressShowFields'>{this.props.address.email}</span><br />
              <label className='AddressLabels'>Contact: </label>
              <span className='AddressShowFields'>{this.props.address.contact}</span><br />
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

} // End class AddressShow

export default AddressShow;
