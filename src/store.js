import { createStore } from "redux";
import songs from "./data";

const initState = {
  songs: songs,
  isPlaying: false,
  currentTime: 0,
  currentSong: songs[0],
  playingSongTimeInfo: { currentTime: 0, duration: 0 },
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_IS_PLAYING":
      return { ...state, isPlaying: action.preload.isPlaying };
    case "SET_CURRENT_SONG":
      return { ...state, currentSong: { ...action.preload } };
    case "SET_PLAYING_SONG_TIME_INFO":
      return {
        ...state,
        playingSongTimeInfo: { ...action.preload },
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
