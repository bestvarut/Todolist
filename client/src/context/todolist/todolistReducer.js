import {
  GET_TODOLISTS,
  CLEAR_TODOLISTS,
  ADD_TODOLIST,
  DELETE_TODOLIST,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_TODOLIST,
  FILTER_TODOLISTS,
  CLEAR_FILTER,
  TODOLIST_ERROR,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_TODOLISTS:
      return {
        ...state,
        todolists: action.payload,
        loading: false,
      };
    case ADD_TODOLIST:
      return {
        ...state,
        todolists: [action.payload, ...state.todolists],
        loading: false,
      };
    case DELETE_TODOLIST:
      return {
        ...state,
        todolists: state.todolists.filter(
          todolist => todolist._id !== action.payload
        ),
        loading: false,
      };
    case CLEAR_TODOLISTS:
      return {
        ...state,
        todolists: null,
        filtered: null,
        error: null,
        current: null,
      };
    case UPDATE_TODOLIST:
      return {
        ...state,
        todolists: state.todolists.map(todolist =>
          todolist._id === action.payload._id ? action.payload : todolist
        ),
        loading: false,
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
    case TODOLIST_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
