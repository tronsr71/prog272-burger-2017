// import React from 'react';
//
// import Address from './Address';
// import AddressEdit from './AddressEdit';
// //import addresses from './AddressList';
// import '../css/App.css';
//
// class AddressChanger extends Address {
//
//   // constructor(props) {
//   //   super(props); // generic call for parent constructor
//   //
//   //   console.log('Address constructor is being called');
//   //
//   //   this.onNameChange = this.onNameChange.bind(this);
//   //
//   //   const address = addresses[this.addressIndex];
//   //   this.state = {
//   //     address: address
//   //   };
//   //
//   // }
//
//   // onNameChange(event) {
//   //   //this.log("ON NAME CHANGE");
//   //   console.log('from oNC: indrx: ' + this.addressIndex);
//   //   const address = addresses[this.addressIndex];
//   //   switch (event.target.id) {
//   //     case 'inputFirstName':
//   //       address.firstName = event.target.value;
//   //       break;
//   //     case 'inputLastName':
//   //       address.lastName = event.target.value;
//   //       break;
//   //     case 'inputStreet':
//   //       address.street = event.target.value;
//   //       break;
//   //     case 'inputCity':
//   //       address.city = event.target.value;
//   //       break;
//   //     case 'inputState':
//   //       address.state = event.target.value;
//   //       break;
//   //     case 'inputZip':
//   //       address.zip = event.target.value;
//   //       break;
//   //     case 'inputPhone':
//   //       address.phone = event.target.value;
//   //       break;
//   //     case 'inputWebsite':
//   //       address.website = event.target.value;
//   //       break;
//   //
//   //     default:
//   //       throw new Error('OH NO BAD CASE in Address onNameChange');
//   //   }
//   //
//   //   this.setState({
//   //     address: address
//   //   });
//   // };
//
//   render() {
//     if (!this.quiet) { console.log('ADDRESS CHANGER RENDER'); }
//     return (
//       <div id='addressChangerRender' className='App'>
//         <AddressEdit
//           address={this.state.address}
//           onAddressChange={this.onAddressChange}
//           onNameChange={this.onNameChange}
//         />
//       </div>
//     );
//   }
//
// } // End class AddressChanger
//
// export default AddressChanger;
