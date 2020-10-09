import React from 'react';

import './Input.scss';

interface Props {
  label: string,
  onChange: (e:any) => void,
  value: string,
  type: string,
  placeholder: string
}

const Input: React.FC<Props> = ({ label, onChange, value, placeholder, type }) => {
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