import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
  isLoading: false,
  error: '',
  playlists: [],
  currentPlaylistSongs: [],
  currentSong: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.START_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case actionTypes.END_LOADING:
      return {
        ...state,
        isLoading: false,
      };

    case actionTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case actionTypes.GET_PLAYLISTS:
      return {
        ...state,
        allDivs: action.payload,
      };

    case actionTypes.GET_PLAYLIST_SONGS:
      return {
        ...state,
        allDivs: action.payload,
      };

    case actionTypes.GET_SONG_DETAILS:
      return {
        ...state,
        allDivs: action.payload,
      };

    default:
      return state;
  }
};
