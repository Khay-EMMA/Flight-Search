import React from 'react';
import { shallow, mount } from 'enzyme';
import CalendarInput from '../components/CalendarInput';

describe('CalendarInput component render', () => {
  it('renders without crashing', () => {
    shallow(<CalendarInput/>);
  });

  it('renders with label', () => {
    let component = shallow(<CalendarInput label={"test"}/>);
    expect(component.find('.label').text()).toBe("test");
  });
});

describe('CalendarInput component transitions', () => {
  it('checks focus transition', () => {
    let component = mount(<CalendarInput/>);
    expect(component.find('.calendar-container').length).toBe(0);

    component.setState({focus: true});
    expect(component.find('.calendar-container').length).toBe(1);
  });
});
