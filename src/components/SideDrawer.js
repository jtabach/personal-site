import React from 'react';
import './SideDrawer.scss';

import ScrollItem from './common/ScrollItem';
import Logo from './common/Logo';

const SCROLL_ANIMATION_DURATION = 500;

const SideDrawer = ({ isVisible, onHandleClick }) => {
  return (
    <div className={ isVisible ? 'side-drawer-open' : 'side-drawer' }>
      <ul>
        <li className="side-drawer-header">
          <ScrollItem
            to="#hero"
            animate={{ duration: SCROLL_ANIMATION_DURATION }}
            disableHistory={true}
            beforeAnimate={onHandleClick}
          >
            <Logo />
          </ScrollItem>
        </li>
        <li className="side-drawer-link">
          <ScrollItem
            to="#about"
            animate={{ duration: SCROLL_ANIMATION_DURATION }}
            disableHistory={true}
            beforeAnimate={onHandleClick}
          >
            About
          </ScrollItem>
        </li>
        <li className="side-drawer-link">
          <ScrollItem
            to="#portfolio"
            animate={{ duration: SCROLL_ANIMATION_DURATION }}
            disableHistory={true}
            beforeAnimate={onHandleClick}
          >
            Portfolio
          </ScrollItem>
        </li>
        <li className="side-drawer-link">
          <ScrollItem
            to="#contact"
            animate={{ duration: SCROLL_ANIMATION_DURATION }}
            disableHistory={true}
            beforeAnimate={onHandleClick}
          >
            Contact
          </ScrollItem>
        </li>
      </ul>
    </div>
  );
}


export default SideDrawer;