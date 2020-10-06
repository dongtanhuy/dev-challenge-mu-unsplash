import React from 'react';

import './Card.scss';

interface Props {
  src: string,
  label: string,
  onDelete: () => void
}

const Card: React.FC<Props> = ({ src, label, onDelete }: Props) => {

  return (
    <div className="Card">
      <div className="Card__DeleteBtn" onClick={onDelete}>delete</div>
      <img className="Card__Image" width={385} src={src} alt="Card" />
      <span className="Card__Label">{label}</span>
    </div>
  )
}

export default Card;