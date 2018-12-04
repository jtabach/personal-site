import React, { Component } from 'react';
import Scrollchor from 'react-scrollchor';
import './Header.scss';

import DrawerToggleButton from './DrawerToggleButton';
import Logo from './common/Logo';

import JNTImage from '../assets/images/jnt.png';

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
          <li>
            <Scrollchor
              to="#about"
              className="header-link"
              animate={{ duration: SCROLL_ANIMATION_DURATION }}
              disableHistory={true}
            >
              About
            </Scrollchor>
          </li>
          <li>
            <Scrollchor
              to="#portfolio"
              className="header-link"
              animate={{ duration: SCROLL_ANIMATION_DURATION }}
              disableHistory={true}
            >
              Portfolio
          </Scrollchor>
          </li>
          <li>
            <Scrollchor
              to="#contact"
              className="header-link"
              animate={{ duration: SCROLL_ANIMATION_DURATION }}
              disableHistory={true}
            >
              Contact
            </Scrollchor>
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