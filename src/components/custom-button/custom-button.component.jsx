import React from 'react';

import './custom-button.styles.css';

const CustomButton = ({ label, onClickHandle, ...adittionalProps }) => (
  <button
    className="custom-button"
    onClick={onClickHandle}
    {...adittionalProps}
  >
    {label}
  </button>
);
export default CustomButton;
