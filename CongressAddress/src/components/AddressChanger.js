import React from 'react';
//import addresses from './AddressList';
import Address from './Address';

//import AddressShow from './AddressShow';
import AddressEdit from './AddressEdit';
import '../css/App.css';


class AddressChanger extends Address {

  // onNameChange = (event) => {
  //   this.log("ON NAME CHANGE");
  //   const address = addresses[this.addressIndex];
  //   switch (event.target.id) {
  //     case 'elfFirstName':
  //       address.firstName = event.target.value;
  //       break;
  //     case 'elfLastName':
  //       address.lastName = event.target.value;
  //       break;
  //     // ETC
  //     default:
  //       throw new Error('OH NO BAD CASE in Address onNameChange');
  //   }
  //
  //   this.setState({
  //     address: address
  //   })
  // };


  render() {
    if (!this.quiet) { console.log("ADDRESS CHANGER RENDER"); }
    return (
      <div id="addressChangerRender" className="App">
        <AddressEdit
          address={this.state.address}
          onAddressChange={this.onAddressChange}
          onNameChange={this.onNameChange}
        />
      </div>
    );
  }

} // End class AddressChanger


export default AddressChanger;
