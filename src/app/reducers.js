import { combineReducers } from 'redux';
import PostReducer from '../post/post-reducer';
import ContactReducer from '../contact/contact-reducer';
import { reducer as formReducer } from 'redux-form';

const reducers = {
  postStore: PostReducer,
  contactStore: ContactReducer,
  form: formReducer
}

const rootReducer = combineReducers(reducers);

export default rootReducer;