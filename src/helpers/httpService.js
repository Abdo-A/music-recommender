import axios from 'axios';

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
};

export const spotifyAccessTokenApi = 'https://us-central1-music-recommender-256312.cloudfunctions.net/getspotifytoken';

export default http;
