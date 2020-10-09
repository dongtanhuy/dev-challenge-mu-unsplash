import React from 'react';
import { openDeleteModalAction } from '../../redux/actions/modal.action';
import { setSelectedPhotoAction } from '../../redux/actions/photo.action';
import { useDispatch } from 'react-redux';

import './Card.scss';

interface Props {
  id: string,
  src: string,
  label: string,
}

const Card: React.FC<Props> = ({ id, src, label }: Props) => {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(setSelectedPhotoAction(id));
    dispatch(openDeleteModalAction());
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