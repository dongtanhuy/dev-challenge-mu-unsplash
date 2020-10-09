import React, { useState } from 'react';
import { closeDeleteModalAction } from '../../redux/actions/modal.action';
import { db } from '../../services/firebase';
import { RootState } from '../../redux/rootReducer';
import { useDispatch, useSelector } from 'react-redux';
import { ModalBase, Input } from '../../components';

interface Props {
  isOpenModal: boolean
}

const DeletePhotoModal: React.FC<Props>  = ({ isOpenModal }) => {
  const [password, setPassword] = useState('');
  const selectedPhotoId = useSelector((state:RootState) => state.photo.selectedPhotoId);
  const dispatch = useDispatch();

  const deletePhoto = (id) => {
    db.ref(`photos/${id}`).remove();
  }

  const onCancel = () => {
    dispatch(closeDeleteModalAction())
  }

  const onSubmit = () => {
    if (password === 'myunsplash') {
      deletePhoto(selectedPhotoId);
    }
    dispatch(closeDeleteModalAction())
  }
  return (
    <ModalBase
      isOpen={isOpenModal}
      title='Are you sure?'
      mainButtonText="Delete"
      onMainButtonSubmit={onSubmit}
      type="warn"
      onCancel={onCancel}
    >
      <Input label="Password" placeholder="*****************" value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
    </ModalBase>
  )
}

export default DeletePhotoModal;