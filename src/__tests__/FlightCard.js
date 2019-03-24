import React from 'react';
import { shallow } from 'enzyme';
import FlightCard from '../components/FlightCard';

describe('Tag component render', () => {
  let testData = {
    id: 'test',
    from: 'test',
    to: 'test',
    departure: '00:00AM',
    arrival: '00:00AM',
    duration: '0h'
  }

  it('renders without returnData', () => {
    let component = shallow(<FlightCard data={testData}/>);
    expect(component.find('.detail-container').length).toBe(1);
  });

  it('renders with returnData', () => {
  let component = shallow(<FlightCard data={testData} returnData={testData}/>);
    expect(component.find('.detail-container').length).toBe(2);
  });
});
