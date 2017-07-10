import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class SubMenu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
     <ul className={this.props.active}>
      {
       this.props.item.children.map((subitem, i) => <li key={i}><a href="#">{subitem.name}</a></li>)
      }
     </ul>
    );
  }
}
