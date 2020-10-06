import React from 'react';

import './Input.scss';


const Input = ({ label, onChange, value, placeholder, type }) => {
  return  (
    <div className="Input">
      <label>{label}</label>
      <input
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        type={type}
      />
    </div>
  )
}

export default Input;