import { OPEN_DELETE_MODAL, CLOSE_ADD_MODAL, OPEN_ADD_MODAL, CLOSE_DELETE_MODAL } from '../actions/modal.action';

type ModalState = {
  isOpenAddModal: boolean,
  isOpenDeleteModal:boolean,
}
const initState: ModalState = { isOpenAddModal : false, isOpenDeleteModal: false};

const modalReducer = (state=initState, action:  any)  => {
  switch (action.type) {
    case OPEN_ADD_MODAL:
      return  {
        ...state,
        isOpenAddModal: true
      }
    case CLOSE_ADD_MODAL:
      return {
        ...state,
        isOpenAddModal: false
      }
    case OPEN_DELETE_MODAL: 
      return {
        ...state,
        isOpenDeleteModal: true
      }
    case CLOSE_DELETE_MODAL: 
      return {
        ...state,
        isOpenDeleteModal: false
      }
    default:
      return state;
  }
}

export default modalReducer;