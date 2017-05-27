import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import DataMaven from '../components/DataMaven';
import Address from '../components/Address';
import addresses from '../components/AddressList';
import AddressShow from '../components/AddressShow';
import ElfDebugEnzyme from '../ElfTestDebug';

const elfTestDebug = new ElfDebugEnzyme(true);
const address = addresses[0];

jest.mock('whatwg-fetch');

describe('Address mount Suite', function () {

  var quiet = true;

    beforeEach(function() {
        const localStorageMock = (function() {
            let storage = {};
            return {
                getItem: function(key) {
                    return storage[key];
                },
                setItem: function(key, value) {
                    storage[key] = value.toString();
                },
                clear: function() {
                    storage = {};
                }
            };
        })();
        Object.defineProperty(global, 'localStorage', {value: localStorageMock});

    });
  /*
   * @param {object} wrapper - Container for a bunch of HTML nodes
   * @param {string} type - Type of test.
   * @param {number} index - Index of HTML element.
   * @param {boolean} talkToMe - Speak even if quiet is true
   */
  const debugAtIndex = function(wrapper, type, index, talkToMe) {
    if (!quiet || talkToMe) {
      const content = wrapper.find('div.Content').childAt(index).debug();
      console.log('Inside Address.test.js\nRendered Content for',
        type + ' at index: ' + index + '\n' + content);
    }
  };

  const defaultField = (fieldName, text, index, talkToMe) => {
    const wrapper = mount(<DataMaven />);
    const label = <label className='AddressLabels'>{fieldName}</label>;
    const expectedText = <span className='AddressShowFields'>{text}</span>;
    debugAtIndex(wrapper, 'default', index, talkToMe);
    expect(wrapper.contains([label, expectedText])).toEqual(true);
  };

  const fieldAfterPrevClick = (fieldName, text, index, talkToMe) => {
    const wrapper = mount(<DataMaven />);
    wrapper.find('button#showPrevAddressClick').simulate('click');
    const label = <label className='AddressLabels'>{fieldName}</label>;
    const expectedText = <span className='AddressShowFields'>{text}</span>;
    debugAtIndex(wrapper, 'prev-click', index, talkToMe);
    expect(wrapper.contains([label, expectedText])).toEqual(true);
  };

  const fieldAfterNextClick = (fieldName, text, index, talkToMe) => {
    const wrapper = mount(<DataMaven />);
    wrapper.find('button#showNextAddressClick').simulate('click');
    const label = <label className='AddressLabels'>{fieldName}</label>;
    const expectedText = <span className='AddressShowFields'>{text}</span>;
    if (index !== undefined) {
      debugAtIndex(wrapper, 'next-click', index, talkToMe);
    }
    expect(wrapper.contains([label, expectedText])).toEqual(true);
  };

  // Simple test to see if we can render inside our component
  // --------------------------------------------------------
  it('renders our Address component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DataMaven />, div);
  });

  // Begin tests with DEFAULT FIELD VALUES
  // -------------------------------------
  it('renders the DEFAULT address for FIRST-NAME', () => {
    defaultField('First Name: ', 'unknown', 1, true);
  });

  it('renders the DEFAULT address for LAST-NAME', () => {
    defaultField('Last Name: ', 'unknown', 4, true);
  });

  it('renders the DEFAULT address for STREET', () => {
    defaultField('Street: ', 'unknown');
  });

  it('renders the DEFAULT address for CITY', () => {
    defaultField('City: ', 'unknown');
  });

  it('renders the DEFAULT address for STATE', () => {
    defaultField('State: ', 'unknown');
  });

  it('renders the DEFAULT address for ZIP-CODE', () => {
    defaultField('Zip Code: ', 'unknown');
  });

  it('renders the DEFAULT address for PHONE', () => {
    defaultField('Phone: ', 'unknown');
  });

  it('renders the DEFAULT address for WEBSITE', () => {
    defaultField('Website: ', 'unknown');
  });

  it('renders the DEFAULT address for EMAIL', () => {
    defaultField('Email: ', 'unknown');
  });

  it('renders the DEFAULT address for CONTACT', () => {
    defaultField('Contact: ', 'unknown');
  });

  // Begin tests with PREV button click
  // ----------------------------------
  it('renders the LAST address for FIRST-NAME', () => {
    fieldAfterPrevClick('First Name: ', 'Jim', 1, true);
  });

  it('renders the LAST address for LAST-NAME', () => {
    fieldAfterPrevClick('Last Name: ', 'Cooper', 4, true);
  });

  it('renders the LAST address for STREET', () => {
    fieldAfterPrevClick('Street: ', '1536 Longworth House Office Building');
  });

  it('renders the LAST address for CITY', () => {
    fieldAfterPrevClick('City: ', 'Washington DC');
  });

  it('renders the LAST address for STATE', () => {
    fieldAfterPrevClick('State: ', 'TN');
  });

  it('renders the LAST address for ZIP-CODE', () => {
    fieldAfterPrevClick('Zip Code: ', '20515-4205');
  });

  it('renders the LAST address for PHONE', () => {
    fieldAfterPrevClick('Phone: ', '202-225-4311');
  });

  it('renders the LAST address for WEBSITE', () => {
    fieldAfterPrevClick('Website: ', 'http://cooper.house.gov');
  });

  it('renders the LAST address for EMAIL', () => {
    fieldAfterPrevClick('Email: ', 'jim.cooper@tn.senate.gov');
  });

  it('renders the LAST address for CONTACT', () => {
    fieldAfterPrevClick('Contact: ', 'unknown');
  });

  // Begin tests with NEXT button click
  // ----------------------------------
  it('renders the FIRST address for FIRST-NAME', () => {
    fieldAfterNextClick('First Name: ', 'Patty');
  });

  it('renders the FIRST address for LAST-NAME', () => {
    fieldAfterNextClick('Last Name: ', 'Murray');
  });

  it('renders the FIRST address for STREET', () => {
    fieldAfterNextClick('Street: ', '915 2nd Avenue');
  });

  it('renders the FIRST address for CITY', () => {
    fieldAfterNextClick('City: ', 'Seattle');
  });

  it('renders the FIRST address for STATE', () => {
    fieldAfterNextClick('State: ', 'WA');
  });

  it('renders the FIRST address for ZIP-CODE', () => {
    fieldAfterNextClick('Zip Code: ', '98174');
  });

  it('renders the FIRST address for PHONE', () => {
    fieldAfterNextClick('Phone: ', '206-553-5545');
  });

  it('renders the FIRST address for WEBSITE', () => {
    fieldAfterNextClick('Website: ', 'www.murray.senate.gov');
  });

  it('renders the FIRST address for EMAIL', () => {
    fieldAfterNextClick('Email: ', 'pmurray@gmail.com');
  });

  it('renders the FIRST address for CONTACT', () => {
    fieldAfterNextClick('Contact: ', 'http://some-office.gov');
  });

});
