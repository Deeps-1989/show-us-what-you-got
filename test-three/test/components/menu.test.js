import React from 'react';
import Menu from '../../src/components/menu';
import SubMenu from '../../src/components/subMenu';
import chai, {expect} from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import {shallow} from 'enzyme';
chai.use(sinonChai);
describe('<MenuContainer/>', () => {
   let props = '';
   beforeEach(() => {
     props = {
      isMobileAndActive:'nav-list',
      details: {
         "name": "menu",
         "children": [
           {
             "name": "Account",
             "children": [
               {
                 "name": "Preferences"
               },
               {
                 "name": "Contact Details"
               },
               {
                 "name": "Manage Users"
               }
             ]
           }
         ]
        }
      }
   });
   const buildSubject = () => {
     return shallow(<Menu {...props}/>);
   };
   it('should render one SubMenu component', () => {
     const wrapper = buildSubject();
     expect(wrapper.find('SubMenu')).to.have.length(1);
   });
   it('should set appropriate initial state in Menu', () => {
     const wrapper = buildSubject();
     expect(wrapper.state('index')).to.equal(-1);
   });
   it('should check if appropriate props in render method is set or not', () => {
     const wrapper = buildSubject();
     expect(wrapper.find('[className="nav-list"]').length).to.equal(1);
    });
    it('should check menu should not be open when user dont click', () => {
      const wrapper = buildSubject();
      wrapper.setState({index:-1});
      console.log(wrapper.debug());
      expect(wrapper.find('[active="nav-dropdown"]').length).to.equal(1);
     });
   it('should check appropriate subMenu should get opened and correct props are passed when clicked', () => {
     const wrapper = buildSubject();
     wrapper.setState({index:0});
     expect(wrapper.find('[active="nav-dropdown open"]').length).to.equal(1);
    });
});
