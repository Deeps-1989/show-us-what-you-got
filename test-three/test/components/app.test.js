import React from 'react';
import App from '../../src/components/app';
import MenuContainer from '../../src/components/menuContainer';
import {expect} from 'chai';
import {shallow} from 'enzyme';


describe('<App/>', () => {
  it('should render one MenuContainer component', () => {
   let props = JSON.stringify({"title": "Some fake data"});
    const wrapper = shallow(<App data = {props}/>);
    expect(wrapper.find('MenuContainer')).to.have.length(1);
  });
});
