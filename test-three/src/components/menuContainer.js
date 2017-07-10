import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Menu from './menu';
export default class MenuContainer extends Component {
  constructor(props) {
    super(props);
    this.mobileBreakPoint =550;
    this.state = {isMobile: false};
    this.isMobile = this.isMobile.bind(this);
  }
  isMobile() {
    let width = window.innerWidth || documentElement.clientWidth || body.clientWidth;
    if(width <= this.mobileBreakPoint && !this.state.isMobile) {
      this.setState({isMobile:true});
    } else if (width <= this.mobileBreakPoint && this.state.isMobile) {
      this.setState({isMobile:false});
    } else {
      this.setState({isMobile:false});
    }
  }
  render() {
    const isMobileMenu = this.state.isMobile? 'active': '';
    const isMobileAndActive =  this.state.isMobile? 'nav-list active': 'nav-list';
    return (
     <section className="navigation">
       <div className="nav-container">
         <div className="brand">
           <a href="#">Moshtix</a>
         </div>
         <nav className="nav">
         <div className="nav-mobile">
           <a id="nav-toggle" className={isMobileMenu} onClick={this.isMobile} href="#"><span></span></a>
         </div>
         <Menu
           isMobileAndActive = {isMobileAndActive}
           details = {this.props.details}
         />
       </nav>
      </div>
</section>
    );
  }
}
