export const SET_SELECTED_PHOTO = 'SET_SELECTED_PHOTO';

export const setSelectedPhotoAction = (id) => ({
  type: SET_SELECTED_PHOTO,
  payload: id,
})