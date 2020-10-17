import { SET_SELECTED_PHOTO, SET_PHOTOS, SET_SEARCH_TEXT } from '../actions/photo.action';

type PhotoState = {
  selectedPhotoId: string,
  photos: object[],
  searchText: ''
}
const initState: PhotoState = { selectedPhotoId : '', photos: [], searchText: ''};

const photoReducer = (state=initState, action:  any)  => {
  switch (action.type) {
    case SET_SELECTED_PHOTO:
      return  {
        ...state,
        selectedPhotoId: action.payload
      }
    case SET_PHOTOS:
      return {
        ...state,
        photos: action.payload,
      }
    case SET_SEARCH_TEXT: 
      return {
        ...state,
        searchText: action.payload,
      }
    default:
      return state;
  }
}

export default photoReducer;