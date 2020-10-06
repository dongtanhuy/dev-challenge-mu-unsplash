import React from 'react';
import { closeDeleteModalAction } from '../../redux/actions/modal.action';
import { useDispatch } from 'react-redux';
import { ModalBase, Input } from '../../components';



const DeletePhotoModal  = ({ isOpenModal }) => {
  const dispatch = useDispatch();

  const onCancel = () => {
    dispatch(closeDeleteModalAction())
  }

  const onSubmit = () => {
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
      <Input label="Password" placeholder="*****************" value="" onChange={() => {}} type="password" />
    </ModalBase>
  )
}

export default DeletePhotoModal;