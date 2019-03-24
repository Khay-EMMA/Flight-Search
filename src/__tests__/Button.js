import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Button from '../components/Button';

describe('Button component render', () => {
  it('renders without crashing', () => {
    shallow(<Button/>);
  });

  it('renders with label', () => {
    let component = shallow(<Button label={"test"}/>);
    expect(component.find('.button').text()).toBe("test");
  });

  it('checks click event', () => {
    let onButtonClick = sinon.spy();
    let component = shallow(<Button onClick={onButtonClick}/>);
    component.simulate('click');
    expect(onButtonClick.callCount).toBe(1);
  });
});
