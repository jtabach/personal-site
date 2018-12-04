import React, { Component } from 'react';
import './Header.scss';

import DrawerToggleButton from './DrawerToggleButton';

import JNTImage from '../assets/images/jnt.png';

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
            <img src={JNTImage} alt="Personal Logo" style={{ height: '32px' }}/>
          </li>
        </ul>
        <ul className='header-right d-none d-md-flex'>
          <li>some text</li>
          <li>This is navigation</li>
        </ul>
        <ul className='header-right d-md-none'>
          <div style={{ height: '20px', width: '18px'}}></div>
        </ul>
      </div>
    );
  }
}

export default Header;