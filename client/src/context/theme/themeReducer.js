import { TOGGLE_THEME } from '../types';

// eslint-disable-next-line import/no-anonymous-default-export
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
