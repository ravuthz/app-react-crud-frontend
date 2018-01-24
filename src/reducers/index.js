import { combineReducers } from 'redux';
import ContactReducer from './contact-reducer';
import PostReducer from './post-reducer';
import { reducer as formReducer } from 'redux-form';

const reducers = {
  contactStore: ContactReducer,
  postStore: PostReducer,
  form: formReducer
}

const rootReducer = combineReducers(reducers);

export default rootReducer;