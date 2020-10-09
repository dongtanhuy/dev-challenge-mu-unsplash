import { SET_SELECTED_PHOTO } from '../actions/photo.action';

type PhotoState = {
  selectedPhotoId: string,
}
const initState: PhotoState = { selectedPhotoId : ''};

const photoReducer = (state=initState, action:  any)  => {
  switch (action.type) {
    case SET_SELECTED_PHOTO:
      return  {
        ...state,
        selectedPhotoId: action.payload
      }
    default:
      return state;
  }
}

export default photoReducer;