import { SAVE_SONGS, CLEAR_SONGS } from "../actionTypes";

const initialState = [];

export const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_SONGS:
      return [...action.payload];
    case CLEAR_SONGS:
      return initialState;
    default:
      return state;
  }
};
