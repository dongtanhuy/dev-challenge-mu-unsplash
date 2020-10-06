import React from 'react';
import { openDeleteModalAction } from '../../redux/actions/modal.action';
import { useDispatch } from 'react-redux';

import './Card.scss';

interface Props {
  src: string,
  label: string,
}

const Card: React.FC<Props> = ({ src, label }: Props) => {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(openDeleteModalAction())
  }
  return (
    <div className="Card">
      <div className="Card__DeleteBtn" onClick={onDelete}>delete</div>
      <img className="Card__Image" width={385} src={src} alt="Card" />
      <span className="Card__Label">{label}</span>
    </div>
  )
}

export default Card;