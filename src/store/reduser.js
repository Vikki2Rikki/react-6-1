import { combineReducers } from 'redux';
import { todoReducer } from './todo/todoReduse';
import { userReducer } from './user/userReduser';

export const reduser = combineReducers({
  user: userReducer,
  todo: todoReducer,
});
