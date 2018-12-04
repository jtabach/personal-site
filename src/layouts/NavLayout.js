import React, { Component } from 'react';

import Header from '../components/Header';
import SideDrawer from '../components/SideDrawer';
import BackDrop from '../components/BackDrop';

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
        <Header handleDrawerToggleClick={this.handleDrawerToggleClick} />
        <SideDrawer isVisible={this.state.isSideDrawerOpen} onHandleClick={this.handleDrawerToggleClick} />
        {backDrop}
        {this.props.children}
      </div>
    );
  }
}

export default NavLayout;