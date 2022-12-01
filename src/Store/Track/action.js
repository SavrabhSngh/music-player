import { SAVE_TRACKS, CLEAR_TRACKS } from "../actionTypes";

export const saveTracks = (tracks) => {
  return {
    type: SAVE_TRACKS,
    payload: tracks,
  };
};

export const clearTracks = () => {
  return {
    type: CLEAR_TRACKS,
  };
};
