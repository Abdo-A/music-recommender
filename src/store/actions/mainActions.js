import * as actionTypes from './actionTypes';
import http, { spotifyApi } from '../../helpers/httpService';
import getSpotifyAccessToken from '../../helpers/getSpotifyAccessToken';
import getUserCountryCode from '../../helpers/getUserCountryCode';

export const getPlaylists = (callback) => (dispatch) => {
  dispatch({
    type: actionTypes.START_LOADING,
  });

  // 1- Getting spotify's access token
  // 2- Getting user's country code
  // 3- Getting playlists
  getSpotifyAccessToken().then((accessToken) => {
    getUserCountryCode().then((countryCode) => {
      requestPlaylists(accessToken, countryCode);
    });
  });

  const requestPlaylists = (accessToken, countryCode) => {
    http
    .get(`${spotifyApi}/browse/featured-playlists?country=${countryCode}&limit=50`, { headers: { Authorization: `Bearer ${accessToken}` } })
    .then((res) => {
      if (callback) callback();
      dispatch({
        type: actionTypes.GET_PLAYLISTS,
        payload: res.data.playlists.items,
      });
    })
    .catch((err) => {
      // console.log(err);
      const invalidCountryCode = err && err.response && Number(err.response.status) === 400;
      if (invalidCountryCode) {
        dispatch(getPlaylists('US'));
        return;
      }
      dispatch({
        type: actionTypes.SET_ERROR,
        payload: 'An error happened while loading playlists',
      });
    }).finally(() => {
      dispatch({
        type: actionTypes.END_LOADING,
      });
    });
  };
};

export const d = 3;
