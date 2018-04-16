import { combineReducers } from 'redux';
import TodoReducer from './TodoReducer';
import TaskReducer from './TaskReducer';

export default combineReducers({
  todoForm: TodoReducer,
  tasks: TaskReducer
});