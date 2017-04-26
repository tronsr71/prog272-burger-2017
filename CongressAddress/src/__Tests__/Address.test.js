import React from 'react';
import { shallow } from 'enzyme';

import Address from "../components/Address";
import addresses from '../components/AddressList';



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