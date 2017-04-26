import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from '../components/App';


describe('App Test Suite', function() {

  it('renders our App component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('renders and displays the word Nine', () => {
    const wrapper = shallow(<App />);
    //console.log(wrapper);
    const nineSign = <p className="App-intro">Nine: 0</p>;
    expect(wrapper.contains(nineSign)).toEqual(true);
  });

  it('renders button click message', () => {
    const wrapper = shallow(<App />);
    const nineSign = <p className="App-intro">Nine: 9</p>;
    wrapper.find('button#appBtn').simulate('click');
    expect(wrapper.contains(nineSign)).toEqual(true);
  });

});
