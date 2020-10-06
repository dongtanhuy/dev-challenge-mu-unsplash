
import { combineReducers } from 'redux';
import modalReducer from './reducers/Modal';


const rootReducer = combineReducers({
    modal: modalReducer,

});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;