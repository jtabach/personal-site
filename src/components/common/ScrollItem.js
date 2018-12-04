import React from 'react';

import Scrollchor from 'react-scrollchor';

const ScrollItem = ({ to, animate, disableHistory, beforeAnimate, children }) => {
  return (
    <Scrollchor
      to={to}
      animate={animate}
      disableHistory={disableHistory}
      beforeAnimate={beforeAnimate}
    >
      {children}
    </Scrollchor>
  );
}

export default ScrollItem;