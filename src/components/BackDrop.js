import React from 'react';
import './BackDrop.scss';

const BackDrop = props => (
  <div className="backdrop" onClick={props.handleBackdropClick} />
);

export default BackDrop;