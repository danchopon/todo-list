import {
  TASK_UPDATE,
  ADD_TASK,
  TOGGLE_TODO
} from "../actions/types";

const INITIAL_STATE = {
  title: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TASK_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case ADD_TASK:
      return INITIAL_STATE;
    case TOGGLE_TODO:
      return state;
    default:
      return state;
  }
}