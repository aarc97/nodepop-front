import React from 'react';

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
