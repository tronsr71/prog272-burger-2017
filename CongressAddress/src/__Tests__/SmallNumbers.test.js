import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import SmallNumbers from '../components/SmallNumbers';


describe('Small Numbers Test Suite', function() {

  it('renders our Small Numbers component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SmallNumbers />, div);
  });

  it('renders and displays the word Nine', () => {
    const wrapper = shallow(<SmallNumbers />);
    //console.log(wrapper);
    const nineSign = <p className="App-intro">Nine: 0</p>;
    expect(wrapper.contains(nineSign)).toEqual(true);
  });

  it('renders button click message', () => {
    const wrapper = shallow(<SmallNumbers />);
    const nineSign = <p className="App-intro">Nine: 9</p>;
    wrapper.find('button#appBtn').simulate('click');
    expect(wrapper.contains(nineSign)).toEqual(true);
  });

});
