import React from 'react';
import { shallow } from 'enzyme';

import ElfHeader from "../components/ElfHeader";


describe('Header Test Suite', function() {

  it('renders and reads H1 text', () => {
    const wrapper = shallow(<ElfHeader />);
    const welcome = <h1>Welcome to the Jungle</h1>;
    expect(wrapper.contains(welcome)).toEqual(true);
  });

});
