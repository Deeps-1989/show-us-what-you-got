import React from 'react';
import SubMenu from '../../src/components/subMenu';
import {expect} from 'chai';
import sinon from 'sinon';
import {shallow} from 'enzyme';

describe('<Sub Menu/>', () => {
   let props = '';
   beforeEach(() => {
     props = {
      active:'nav-dropdown open',
      item: {
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
     }
   });
   const buildSubject = () => {
     return shallow(<SubMenu {...props}/>);
   };
   it('should check if appropriate classname in render method is set or not', () => {
     const wrapper = buildSubject();
     expect(wrapper.find('[className="nav-dropdown open"]').length).to.equal(1);
    });
});
