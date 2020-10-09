import React from 'react';
import Modal from 'react-modal';
import { Button } from '../../components';
import './ModalBase.scss';

const style = {
  content: {
    top : '50%',
    left : '50%',
    right: 'auto',
    bottom: 'auto',
    padding: '24px 32px',
    borderRadius: '12px',
    transform: 'translate(-50%, -50%)',
    width: 620,
  }
}

interface Props {
  isOpen: boolean,
  children: React.ReactNode,
  title: string,
  onMainButtonSubmit: (e: any) => void,
  mainButtonText: string,
  type: string,
  onCancel: (e: any) => void
}

const ModalBase = ({ isOpen, children, title, onMainButtonSubmit, mainButtonText, type="submit", onCancel }) => {

  return (
    <Modal
      isOpen={isOpen}
      style={style}
    >
      <h2 className="ModalBase__title">{title}</h2>
      {children}
      <div className="ModalBase__buttons" >
        <button className="ModalBase__cancelBtn" onClick={onCancel}>Cancel</button>
        <Button type={type} text={mainButtonText} onClick={onMainButtonSubmit} />
      </div>
    </Modal>
  )
}

Modal.setAppElement('#root');

export default ModalBase;