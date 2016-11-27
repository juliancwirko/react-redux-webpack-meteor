import { combineReducers } from 'redux';
import user from './components/Login/LoginReducers';
import todos from './components/Todo/TodoReducers';

const mainReducer = combineReducers({
  todos,
  user,
});

export default mainReducer;
