
import { combineReducers } from 'redux';
import modalReducer from './reducers/Modal';
import photoReducer from './reducers/Photo';


const rootReducer = combineReducers({
    modal: modalReducer,
    photo:photoReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;