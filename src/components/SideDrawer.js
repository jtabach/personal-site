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
          <Logo />
        </li>
        <li className="side-drawer-link">
          <ScrollItem
            to="#about"
            animate={{ duration: SCROLL_ANIMATION_DURATION }}
            disableHistory={true}
            beforeAnimate={onHandleClick}
            text="About"
          />
        </li>
        <li className="side-drawer-link">
          <ScrollItem
            to="#portfolio"
            animate={{ duration: SCROLL_ANIMATION_DURATION }}
            disableHistory={true}
            beforeAnimate={onHandleClick}
            text="Portfolio"
          />
        </li>
        <li className="side-drawer-link">
          <ScrollItem
            to="#contact"
            animate={{ duration: SCROLL_ANIMATION_DURATION }}
            disableHistory={true}
            beforeAnimate={onHandleClick}
            text="Contact"
          />
        </li>
      </ul>
    </div>
  );
}


export default SideDrawer;