import { TOGGLE_THEME } from '../types';

export default (state, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        dark: action.payload.D,
        theme: action.payload.T,
      };
    default:
      return state;
  }
};
