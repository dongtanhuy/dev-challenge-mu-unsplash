import React, { useState } from 'react';
import { db } from '../../services/firebase';
import { closeAddModalAction } from '../../redux/actions/modal.action';
import { useDispatch } from 'react-redux';
import { ModalBase, Input } from '../../components';

interface Props {
  isOpenModal: boolean
}

const AddPhotoModal:React.FC<Props>  = ({ isOpenModal }) => {
  const [url, setURL] = useState('');
  const [label, setLabel] = useState('');
  const dispatch = useDispatch();
  const onCancel = () => {
    dispatch(closeAddModalAction())
  }

  const onSubmit = () => {
    const photosRef = db.ref('photos');
    photosRef.push().set({
      label,
      url,
      createdAt: new Date().getTime()
    })
    dispatch(closeAddModalAction());
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
      <Input label="Lalel" placeholder="Suspendisse elit massa" value={label} onChange={(e) => setLabel(e.target.value)} type="text" />
      <Input label="Photo URL" placeholder="https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=r..." value={url} onChange={(e) => setURL(e.target.value)} type="text" />
    </ModalBase>
  )
}

export default AddPhotoModal;