import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Input from '../components/Input';

describe('Input component render', () => {
  it('renders without crashing', () => {
    shallow(<Input/>);
  });

  it('renders with label', () => {
    let component = shallow(<Input label={"test"}/>);
    expect(component.find('.label').text()).toBe("test");
  });
});
