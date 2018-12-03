import React, { Component } from 'react';
import './Navigation.scss';

import DrawerToggleButton from './DrawerToggleButton';

class Navigation extends Component {

  render() {
    return (
      <div className='container-fluid navigation-wrapper'>
        <DrawerToggleButton click={this.props.handleDrawerToggleClick} />
        This is navigation
      </div>
    );
  }
}

export default Navigation;