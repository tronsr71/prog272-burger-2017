import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { shallow } from 'enzyme';
import ElfHeader from "./components/ElfHeader";



describe('App Test Suite', function() {

  it('renders our App component without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
  });

  it('renders and reads H1 text', () => {
      const wrapper = shallow(<ElfHeader />);
      const welcome = <h1>Welcome to the Jungle</h1>;
      expect(wrapper.contains(welcome)).toEqual(true);
  });

  it('renders and displays the word Nine', () => {
    const wrapper = shallow(<App />);
    //console.log(wrapper);
    const welcome = <p className="App-intro">Nine: 0</p>;
    expect(wrapper.contains(welcome)).toEqual(true);
  });

  it('renders button click message', () => {
      const wrapper = shallow(<App />);
      const nineSign = <p className="App-intro">Nine: 9</p>;
      wrapper.find('button#appBtn').simulate('click');
      expect(wrapper.contains(nineSign)).toEqual(true);
  });


});

