import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import SmallNumbers from '../components/SmallNumbers';

describe('Small Numbers Test Suite', function() {

  it('renders our Small Numbers component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SmallNumbers />, div);
  });

  it('renders and displays the word Num', () => {
    const wrapper = shallow(<SmallNumbers />);
    const label = <label id='numbersLabel'>Num: </label>;
    const expectedText = <span id='numbersText'>0</span>;
    expect(wrapper.contains([label, expectedText])).toEqual(true);
  });

  it('renders button click message', () => {
    const wrapper = shallow(<SmallNumbers />);
    const label = <label id='numbersLabel'>Num: </label>;
    const expectedText = <span id='numbersText'>9</span>;
    wrapper.find('button#btnSmallNumbers').simulate('click');
    expect(wrapper.contains([label, expectedText])).toEqual(true);
  });

});
