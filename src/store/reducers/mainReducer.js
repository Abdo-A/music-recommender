import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
  isLoading: false,
  error: '',
  playlists: [],
  currentPlaylistTracks: [],
  currentTrack: {},
  chosenPlaylistId: '',
  userCountry: '',
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
        playlists: action.payload,
      };

    case actionTypes.GET_PLAYLIST_TRACKS:
      return {
        ...state,
        currentPlaylistTracks: action.payload,
        chosenPlaylistId: action.chosenPlaylistId,
      };

    case actionTypes.GET_TRACK_DETAILS:
      return {
        ...state,
        currentTrack: action.payload,
      };

    case actionTypes.SET_USER_COUNTRY:
    return {
      ...state,
      userCountry: action.payload,
    };

    default:
      return state;
  }
};
