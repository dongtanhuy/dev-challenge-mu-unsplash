import React from 'react';

import './Card.scss';

interface Props {
  src: string,
}

const Card: React.FC<Props> = ({src}: Props) => {

  return (
    <div className="Card">
      <img className="Card__Image" width={385} src={src} alt="Card" />
    </div>
  )
}

export default Card;