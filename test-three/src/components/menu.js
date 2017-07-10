import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SubMenu from './subMenu';
export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.handleBlur = this.handleBlur.bind(this);
    this.state = {index:-1};
  }
  toggle(index) {
   this.setState({index:index});
  }
  handleBlur() {
   setTimeout(()=> this.setState({index:-1}),100);
  }
  render() {
    return (
     <ul className={this.props.isMobileAndActive}>
      {
        this.props.details.children.map((item, i) => {
          const active = this.state.index === i ? 'nav-dropdown open' : 'nav-dropdown';
          return (
            <li key={i}><a href="#" onClick={this.toggle.bind(this,i)} onBlur={this.handleBlur}>{item.name}</a>
              <SubMenu
               active = {active}
               item = {item}
               />
            </li>
          )
        })
      }
    </ul>
    );
  }
}
