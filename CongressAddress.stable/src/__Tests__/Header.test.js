import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import ElfHeader from '../components/ElfHeader';

describe('Header Test Suite', function() {

  it('renders our Header component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ElfHeader />, div);
  });

  it('renders and reads H1 text', () => {
    const wrapper = shallow(<ElfHeader />);
    const welcome = <h1>Welcome to Congress Contacts</h1>;
    expect(wrapper.contains(welcome)).toEqual(true);
  });

});
