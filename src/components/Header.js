import React, { Component } from 'react';
import './Header.scss';

import DrawerToggleButton from './DrawerToggleButton';
import ScrollItem from './common/ScrollItem';
import Logo from './common/Logo';

const SCROLL_ANIMATION_DURATION = 500;

class Header extends Component {

  render() {
    return (
      <div className='container-fluid header-wrapper'>
        <ul className='d-md-none'>
          <li>
            <DrawerToggleButton click={this.props.handleDrawerToggleClick} />
          </li>
        </ul>
        <ul>
          <li>
            <Logo />
          </li>
        </ul>
        <ul className='header-right d-none d-md-flex'>
          <li className="header-link">
            <ScrollItem
              to="#about"
              animate={{ duration: SCROLL_ANIMATION_DURATION }}
              disableHistory={true}
              text="About"
            />
          </li>
          <li className="header-link">
            <ScrollItem
              to="#portfolio"
              animate={{ duration: SCROLL_ANIMATION_DURATION }}
              disableHistory={true}
              text="Portfolio"
            />
          </li>
          <li className="header-link">
            <ScrollItem
              to="#contact"
              animate={{ duration: SCROLL_ANIMATION_DURATION }}
              disableHistory={true}
              text="Contact"
            />
          </li>
        </ul>
        <ul className='header-right d-md-none'>
          <div style={{ height: '20px', width: '18px'}}></div>
        </ul>
      </div>
    );
  }
}

export default Header;