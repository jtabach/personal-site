import React, { Component } from 'react';
import './SideDrawer.scss';

class SideDrawer extends Component {

  render() {
    const { isVisible } = this.props;

    return (
      <div className={isVisible ? 'side-drawer-open' : 'side-drawer'}>
        <ul>
          <li>link1 </li>
          <li>link2 </li>
        </ul>
      </div>
    );
  }
}


export default SideDrawer;