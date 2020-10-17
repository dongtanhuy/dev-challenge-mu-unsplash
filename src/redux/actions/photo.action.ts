export const SET_SELECTED_PHOTO = 'SET_SELECTED_PHOTO';
export const SET_PHOTOS = 'SET_PHOTOS';
export const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT';

export const setSelectedPhotoAction = (id) => ({
  type: SET_SELECTED_PHOTO,
  payload: id,
});

export const setPhotosAction = (photos) => ({
  type: SET_PHOTOS,
  payload: photos
});

export const setSearchTextAction = (text) => ({
  type: SET_SEARCH_TEXT,
  payload: text
});