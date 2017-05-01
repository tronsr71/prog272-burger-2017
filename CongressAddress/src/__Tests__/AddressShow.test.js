import React from 'react';
import { shallow } from 'enzyme';

import addresses from '../components/AddressList';
import Address from "../components/Address";
import AddressShow from "../components/AddressShow";

const address = addresses[0];

describe('AddressShow Shallow Suite', function () {

  var quiet = true;

  /*
   * @param {object} wrapper - Container for a bunch of HTML nodes
   * @param {number} index - Index of HTML element.
   * @param {boolean} talkToMe - Speak even if quiet is true
   */
  const getIndex = function(wrapper, index, talkToMe) {
    if (!quiet || talkToMe) {
      const ninep = wrapper.find('div#addressShowRender').childAt(index).debug();
      console.log('NINEP:', ninep);
    }
  };

  const defaultFieldTest = (name, index, talkToMe) => {
    const wrapper = shallow(<AddressShow address={address}  />);
    const welcome = <p className="App-intro">{name}</p>;
    getIndex(wrapper, index, talkToMe);
    expect(wrapper.contains(welcome)).toEqual(true);
  };


  it('renders and displays the default first name', () => {
    defaultFieldTest('firstName: unknown', 0);
  });

  it('renders and displays the default last name', () => {
    defaultFieldTest('lastName: unknown', 0);
  });

  it('renders and displays the default street', () => {
    defaultFieldTest('street: unknown', 0);
  });

  it('renders and displays the default city', () => {
    defaultFieldTest('city: unknown', 0);
  });

  it('renders and displays the default state', () => {
    defaultFieldTest('state: unknown', 0);
  });

  it('renders and displays the default zip', () => {
    defaultFieldTest('zip: unknown', 0);
  });

  it('renders and displays the default phone', () => {
    defaultFieldTest('phone: unknown', 0);
  });

  it('renders and displays the default website', () => {
    defaultFieldTest('website: unknown', 0);
  });


});