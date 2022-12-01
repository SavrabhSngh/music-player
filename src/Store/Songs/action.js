import { SAVE_SONGS, CLEAR_SONGS } from "../actionTypes";

export const saveSongs = (tracks) => {
  return {
    type: SAVE_SONGS,
    payload: tracks,
  };
};

export const clearSongs = () => {
  return {
    type: CLEAR_SONGS,
  };
};
