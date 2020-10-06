import React from 'react';
import { closeAddModalAction } from '../../redux/actions/modal.action';
import { useDispatch } from 'react-redux';
import { ModalBase, Input } from '../../components';



const AddPhotoModal  = ({ isOpenModal }) => {
  const dispatch = useDispatch();

  const onCancel = () => {
    dispatch(closeAddModalAction())
  }

  const onSubmit = () => {
    dispatch(closeAddModalAction())
  }
  return (
    <ModalBase
      isOpen={isOpenModal}
      title="Add a new photo"
      mainButtonText="Submit"
      onMainButtonSubmit={onSubmit}
      type="submit"
      onCancel={onCancel}
    >
      <Input label="Lalel" placeholder="Suspendisse elit massa" value="" onChange={() => {}} type="text" />
      <Input label="Photo URL" placeholder="https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=r..." value="" onChange={() => {}} type="text" />
    </ModalBase>
  )
}

export default AddPhotoModal;