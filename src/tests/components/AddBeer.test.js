import React from 'react';
import { shallow } from 'enzyme';
import { AddBeer } from '../../components/AddBeer';

test('should AddBeer render correctly', () => {
  const wrapper = shallow(<AddBeer />); 
  expect(wrapper).toMatchSnapshot();
})

test('should set "beer_name" on input change', () => {
  const value = 'Rapid Duck';
  const wrapper = shallow(<AddBeer />);
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('beer_name')).toBe(value);
});

