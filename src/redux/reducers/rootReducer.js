import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import articlesReducer from './articlesReducer';

const rootReducer = combineReducers({
    articlesReducer,
    firestoreReducer
})

export default rootReducer;