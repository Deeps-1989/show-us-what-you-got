import React from 'react';
import Menu from '../../src/components/menu';
import MenuContainer from '../../src/components/menuContainer';
import chai, {expect} from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import {shallow} from 'enzyme';
chai.use(sinonChai);
describe('<MenuContainer/>', () => {
   let props = '';
   beforeEach(() => {
     props = {
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
     return shallow(<MenuContainer {...props}/>);
   };
   it('should render one Menu component', () => {
     const wrapper = buildSubject();
     expect(wrapper.find('Menu')).to.have.length(1);
   });
   it('should set appropriate initial state in MenuContainer', () => {
     const wrapper = buildSubject();
     expect(wrapper.state('isMobile')).to.equal(false);
   });
   it('should toggle isMobile to true when width is less than breakpoint', () => {
     const wrapper = buildSubject();
     global.window = {innerWidth:400};
     wrapper.instance().isMobile();
     expect(wrapper.state('isMobile')).to.equal(true);
    });
    it('should toggle isMobile to false when width is less than breakpoint', () => {
      const wrapper = buildSubject();
      global.window = {innerWidth:400};
      wrapper.setState({isMobile: true});
      wrapper.instance().isMobile();
      expect(wrapper.state('isMobile')).to.equal(false);
     });
     it('should toggle isMobile to false when width is more than breakpoint', () => {
       const wrapper = buildSubject();
       global.window = {innerWidth:800};
       wrapper.setState({isMobile: true});
       wrapper.instance().isMobile();
       expect(wrapper.state('isMobile')).to.equal(false);
      });
      it('should not set dynamic className when view is rendered in desktop', () => {
        const wrapper = buildSubject();
        global.window = {innerWidth:800};
        expect(wrapper.find('[className="active"]').length).to.equal(0);
        expect(wrapper.find('[isMobileAndActive="nav-list"]').length).to.equal(1);
       });
       it('should not set dynamic className when view is rendered in mobile', () => {

         global.window = {innerWidth:400};
         const wrapper = buildSubject();
         wrapper.setState({isMobile: true});
         wrapper.update();
         expect(wrapper.find('[className="active"]').length).to.equal(1);
         expect(wrapper.find('[isMobileAndActive="nav-list active"]').length).to.equal(1);
        });
        it('should check if appropriate handleClick function is called when user click the menu', () => {
          let spy = sinon.spy(MenuContainer.prototype, "isMobile");
          const wrapper = buildSubject();
          expect(wrapper.find('[id="nav-toggle"]').length).to.equal(1);
          wrapper.find('[id="nav-toggle"]').simulate('click');
          expect(spy).to.have.been.calledWith();
        });
});
