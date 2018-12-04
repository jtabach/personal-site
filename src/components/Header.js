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
        <div className="header-wrapper__contain">
          <ul className='d-md-none'>
            <li>
              <DrawerToggleButton click={this.props.handleDrawerToggleClick} />
            </li>
          </ul>
          <ul>
            <li>
              <ScrollItem
                to="#hero"
                animate={{ duration: SCROLL_ANIMATION_DURATION }}
                disableHistory={true}
              >
                <Logo />
              </ScrollItem>
            </li>
          </ul>
          <ul className='header-right d-none d-md-flex'>
            <li className="header-link">
              <ScrollItem
                to="#about"
                animate={{ duration: SCROLL_ANIMATION_DURATION }}
                disableHistory={true}
              >
                About
              </ScrollItem>
            </li>
            <li className="header-link">
              <ScrollItem
                to="#portfolio"
                animate={{ duration: SCROLL_ANIMATION_DURATION }}
                disableHistory={true}
              >
                Portfolio
              </ScrollItem>
            </li>
            <li className="header-link">
              <ScrollItem
                to="#contact"
                animate={{ duration: SCROLL_ANIMATION_DURATION }}
                disableHistory={true}
              >
                Contact
              </ScrollItem>
            </li>
          </ul>
          <ul className='header-right d-md-none'>
            <div style={{ height: '20px', width: '18px'}}></div>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;