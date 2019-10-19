import http, { spotifyAccessTokenApi } from './httpService';

const getSpotifyAccessToken = async () => {
  try {
    const response = await http.get(spotifyAccessTokenApi);
    return response.data.access_token;
  } catch (error) {
    return { error };
  }
};

export default getSpotifyAccessToken;
