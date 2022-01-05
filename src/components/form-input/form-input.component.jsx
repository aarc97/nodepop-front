import React from 'react';

import './form-input.styles.css';

const FormInput = ({ handleChange, label, ...additionalProps }) => (
  <div className="group">
    <input
      className="form-input"
      onChange={handleChange}
      {...additionalProps}
    ></input>
    {label ? <label className="form-input-label">{label}</label> : null}
  </div>
);

export default FormInput;
