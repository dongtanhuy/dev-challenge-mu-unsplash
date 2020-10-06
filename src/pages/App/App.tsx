import React from 'react';
import { RootState } from '../../redux/rootReducer';
import { useSelector } from 'react-redux'
import { Header, Gallery, AddPhotoModal, DeletePhotoModal } from '../../components';
import './App.scss';

const App = () => {
  const isOpenAddModal = useSelector((state: RootState) => state.modal.isOpenAddModal)
  const isOpenDeleteModal = useSelector((state: RootState) => state.modal.isOpenDeleteModal)
  return (
    <div className="App">
      <Header />
      <Gallery />
      <AddPhotoModal isOpenModal={isOpenAddModal} />
      <DeletePhotoModal isOpenModal={isOpenDeleteModal} />
    </div>
  );
}

export default App;
