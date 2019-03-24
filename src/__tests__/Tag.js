import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Tag from '../components/Tag';

describe('Tag component render', () => {
  it('renders without crashing', () => {
    shallow(<Tag/>);
  });

  it('renders with label', () => {
    let component = shallow(<Tag label={"test"}/>);
    expect(component.find('.tag').text()).toBe("test");
  });

  it('checks click event', () => {
    let onTagClick = sinon.spy();
    let component = shallow(<Tag onClick={onTagClick}/>);
    component.simulate('click');
    expect(onTagClick.callCount).toBe(1);
  });

  it('checks active class transition', () => {
    let component = shallow(<Tag active={false}/>);
    expect(component.find('.active').length).toBe(0);

    component.setProps({ active: true });
    expect(component.find('.active').length).toBe(1);
  })
});
