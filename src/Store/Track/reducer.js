import { SAVE_TRACKS, CLEAR_TRACKS } from "../actionTypes";

const initialState = [];

export const tracksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_TRACKS:
      return [...action.payload];
    case CLEAR_TRACKS:
      return initialState;
    default:
      return state;
  }
};
