import {
  ADD_TODOLIST,
  DELETE_TODOLIST,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_TODOLIST,
  FILTER_TODOLISTS,
  CLEAR_FILTER,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_TODOLIST:
      return {
        ...state,
        todolists: [...state.todolists, action.payload],
      };
    case DELETE_TODOLIST:
      return {
        ...state,
        todolists: state.todolists.filter(
          todolist => todolist.id !== action.payload
        ),
      };
    case UPDATE_TODOLIST:
      return {
        ...state,
        todolists: state.todolists.map(todolist =>
          todolist.id === action.payload.id ? action.payload : todolist
        ),
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case FILTER_TODOLISTS:
      return {
        ...state,
        filtered: state.todolists.filter(todolist => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return todolist.name.match(regex) || todolist.info.match(regex);
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    default:
      return state;
  }
};
