import {
  ADD_TODOLIST,
  DELETE_TODOLIST,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_TODOLIST,
  FILTER_TODOLISTS,
  CLEAR_TODOLIST,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_TODOLIST:
      return {
        ...state,
        todolists: [...state.todolists, action.payload],
      };
    default:
      return state;
  }
};
