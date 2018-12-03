import React, { Component } from 'react';

import Navigation from './Navigation';
import SideDrawer from './SideDrawer';
import BackDrop from './BackDrop';

class NavLayout extends Component {
  state = {
    isSideDrawerOpen: false
  };

  handleDrawerToggleClick = () => {
    this.setState(prevState => {
      return { isSideDrawerOpen: !prevState.isSideDrawerOpen };
    });
  };

  handleBackDropClick = () => {
    this.setState({ isSideDrawerOpen: false });
  };

  render() {
    let backDrop;

    if (this.state.isSideDrawerOpen) {
      backDrop = <BackDrop handleBackdropClick={this.handleBackDropClick} />;
    }
    return (
      <div style={{ height: '100%' }}>
        <Navigation handleDrawerToggleClick={this.handleDrawerToggleClick} />
        <SideDrawer isVisible={this.state.isSideDrawerOpen} />
        {backDrop}
      </div>
    );
  }
}

export default NavLayout;