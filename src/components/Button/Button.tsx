import React from 'react';
import './Button.scss';

interface Props {
  text: string,
  type: string,
  onClick: () => void
}
const Button: React.FC<Props> = ({ text, onClick, type }) => {
  return (
    <button className={`Button ${type}`} onClick={ onClick}>
      {text}
    </button>
  )
}

export default Button;