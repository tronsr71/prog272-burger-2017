import React from 'react';
import { mount } from 'enzyme';

import Address from "../components/Address";
import addresses from '../components/AddressList';
import AddressShow from '../components/AddressList';

const address = addresses[0];

describe('Address mount Suite', function () {

  var quiet = true;

  /*
   * @param {object} wrapper - Container for a bunch of HTML nodes
   * @param {number} index - Index of HTML element.
   * @param {boolean} talkToMe - Speak even if quiet is true
   */
  const getIndex = function(wrapper, index, talkToMe) {
    if (!quiet || talkToMe) {
      const ninep = wrapper.find('div#addressRender').childAt(index).debug();
      console.log('NINEP:', ninep);
    }
  };

  const defaultFieldTest = (name, index, talkToMe) => {
    const wrapper = mount(<Address address={address}  />);
    const welcome = <p className="App-intro">{name}</p>;
    getIndex(wrapper, index, talkToMe);
    expect(wrapper.contains(welcome)).toEqual(true);
  };

  const afterClickFieldTest = (name, index, talkToMe) => {
    const wrapper = mount(<Address address={address}/>);
    const patty = <p className="App-intro">{name}</p>;
    wrapper.find('button#showNextAddressClick').simulate('click');
    getIndex(wrapper, index, talkToMe);
    expect(wrapper.contains(patty)).toEqual(true);
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


  // Begin tests with button click
  // -----------------------------
  it('renders the first address for first name', () => {
    afterClickFieldTest('firstName: Patty', 0);
  });

  it('renders the first address for last name', () => {
    afterClickFieldTest('lastName: Murray', 0);
  });

  it('renders the first address for street', () => {
    afterClickFieldTest('street: 915 2nd Avenue', 0);
  });

  it('renders the first address for city', () => {
    afterClickFieldTest('city: Seattle', 0);
  });

  it('renders the first address for state', () => {
    afterClickFieldTest('state: WA', 0);
  });

  it('renders the first address for zip', () => {
    afterClickFieldTest('zip: 98174', 0);
  });

  it('renders the first address for phone', () => {
    afterClickFieldTest('phone: (206) 553-5545', 0);
  });

  it('renders the first address for website', () => {
    afterClickFieldTest('website: www.murray.senate.gov', 0);
  });


});








/*
describe('Address Default Value Test Suite', function() {

  // getLast and getFirst are for debugging
  const getLast = (wrapper) => {
    const ninep = wrapper.find('p').last().debug();
    console.log(ninep);
  };

  const getFirst = (wrapper) => {
    const ninep = wrapper.find('p').first().debug();
    console.log(ninep);
  };

  it('renders and displays the default value for firstName', () => {
    const wrapper = shallow(<Address address={addresses}/>);
    const display = <p className="App-intro">firstName: unknown</p>;
    expect(wrapper.contains(display)).toEqual(true);
  });

  it('renders and displays the default value for lastName', () => {
    const wrapper = shallow(<Address address={addresses}/>);
    const display = <p className="App-intro">lastName: unknown</p>;
    expect(wrapper.contains(display)).toEqual(true);
  });

  it('renders and displays the default value for street', () => {
    const wrapper = shallow(<Address address={addresses}/>);
    const display = <p className="App-intro">street: unknown</p>;
    expect(wrapper.contains(display)).toEqual(true);
  });

  it('renders and displays the default value for city', () => {
    const wrapper = shallow(<Address address={addresses}/>);
    const display = <p className="App-intro">city: unknown</p>;
    expect(wrapper.contains(display)).toEqual(true);
  });

  it('renders and displays the default value for state', () => {
    const wrapper = shallow(<Address address={addresses}/>);
    const display = <p className="App-intro">state: unknown</p>;
    expect(wrapper.contains(display)).toEqual(true);
  });

  it('renders and displays the default value for zip', () => {
    const wrapper = shallow(<Address address={addresses}/>);
    const display = <p className="App-intro">zip: unknown</p>;
    expect(wrapper.contains(display)).toEqual(true);
  });

  it('renders and displays the default value for phone', () => {
    const wrapper = shallow(<Address address={addresses}/>);
    const display = <p className="App-intro">phone: unknown</p>;
    expect(wrapper.contains(display)).toEqual(true);
  });

  it('renders and displays the default value for website', () => {
    const wrapper = shallow(<Address address={addresses}/>);
    const display = <p className="App-intro">website: unknown</p>;
    expect(wrapper.contains(display)).toEqual(true);
  });

// });
//
//
//
// describe('Address First Address (index=1) Value Test Suite', function() {

  it('renders the first (index=1) AddressList value for firstName', () => {
    const wrapper = shallow(<Address address={addresses}/>);
    const display = <p className="App-intro">firstName: Patty</p>;
    wrapper.find('button#getAddressBtn').simulate('click');
    expect(wrapper.contains(display)).toEqual(true);
  });

  it('renders the first (index=1) AddressList value for lastName', () => {
    const wrapper = shallow(<Address address={addresses}/>);
    const display = <p className="App-intro">lastName: Murray</p>;
    wrapper.find('button#getAddressBtn').simulate('click');
    expect(wrapper.contains(display)).toEqual(true);
  });

  it('renders the first (index=1) AddressList value for street', () => {
    const wrapper = shallow(<Address address={addresses}/>);
    const display = <p className="App-intro">street: 915 2nd Avenue</p>;
    wrapper.find('button#getAddressBtn').simulate('click');
    expect(wrapper.contains(display)).toEqual(true);
  });

  it('renders the first (index=1) AddressList value for city', () => {
    const wrapper = shallow(<Address address={addresses}/>);
    const display = <p className="App-intro">city: Seattle</p>;
    wrapper.find('button#getAddressBtn').simulate('click');
    expect(wrapper.contains(display)).toEqual(true);
  });

  it('renders the first (index=1) AddressList value for state', () => {
    const wrapper = shallow(<Address address={addresses}/>);
    const display = <p className="App-intro">state: WA</p>;
    wrapper.find('button#getAddressBtn').simulate('click');
    expect(wrapper.contains(display)).toEqual(true);
  });

  it('renders the first (index=1) AddressList value for zip', () => {
    const wrapper = shallow(<Address address={addresses}/>);
    const display = <p className="App-intro">zip: 98174</p>;
    wrapper.find('button#getAddressBtn').simulate('click');
    expect(wrapper.contains(display)).toEqual(true);
  });

  it('renders the first (index=1) AddressList value for phone', () => {
    const wrapper = shallow(<Address address={addresses}/>);
    const display = <p className="App-intro">phone: (206) 553-5545</p>;
    wrapper.find('button#getAddressBtn').simulate('click');
    expect(wrapper.contains(display)).toEqual(true);
  });

  it('renders the first (index=1) AddressList value for website', () => {
    const wrapper = shallow(<Address address={addresses}/>);
    const display = <p className="App-intro">website: www.murray.senate.gov</p>;
    wrapper.find('button#getAddressBtn').simulate('click');
    expect(wrapper.contains(display)).toEqual(true);
  });


});

  */