import React from 'react';

import Scrollchor from 'react-scrollchor';

const ScrollItem = ({ to, animate, disableHistory, text, beforeAnimate }) => {
  return (
    <Scrollchor
      to={to}
      animate={animate}
      disableHistory={disableHistory}
      beforeAnimate={beforeAnimate}
    >
      {text}
    </Scrollchor>
  );
}

export default ScrollItem;