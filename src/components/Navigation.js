import React, { Component } from 'react';
import './Navigation.scss';

import DrawerToggleButton from './DrawerToggleButton';

import JNTImage from '../assets/images/jnt.png';

class Navigation extends Component {

  render() {
    return (
      <div className='container-fluid navigation-wrapper'>
        <ul className='nav-left d-md-none'>
          <li>
            <DrawerToggleButton click={this.props.handleDrawerToggleClick} />
          </li>
        </ul>
        <ul>
          <li>
            <img src={JNTImage} alt="Personal Logo" style={{ height: '32px' }}/>
          </li>
        </ul>
        <ul className='nav-right d-none d-md-flex'>
          <li>some text</li>
          <li>This is navigation</li>
        </ul>
        <ul className='nav-right d-md-none'>
          <li>
            <div style={{ height: '20px', width: '18px'}}></div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navigation;