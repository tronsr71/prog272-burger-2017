import React from 'react';
import { mount } from 'enzyme';

import addresses from '../components/AddressList';
import AddressChanger from "../components/AddressChanger";
import ElfTestDebug from '../ElfTestDebug';
const elfTestDebug = new ElfTestDebug(true);


describe('AddressEdit Mount Suite', function () {

  var quiet = true;


  const defaultFieldTest = (id) => {
    const wrapper = mount(<AddressChanger />);
    const welcome = <input id={id} className="App-intro" value="unknown" />;
    expect(wrapper.containsMatchingElement(welcome)).toEqual(true);
  };


  it('renders and displays the default value for first name', () => {
    const wrapper = mount(<AddressChanger />);
    elfTestDebug.getFirst(wrapper, 'input');
    defaultFieldTest('inputFirstName', 0);
  });

  it('renders and displays the default value for last name', () => {
    //elfTestDebug.getLast(wrapper, 'input');
    defaultFieldTest('inputLastName', 0);
  });


});
