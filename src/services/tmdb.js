import axios from 'axios';

const baseURL = process.env.REACT_APP_TMDB_API;
const api_key = process.env.REACT_APP_TMDB_KEY;

class TMDBServices {
  getDetails = (id, type = 'movie') => {
    return axios.get(`${baseURL}/${type === 'show' ? 'tv' : type}/${id}`, {
      params: {
        api_key,
      },
    });
  };
}

export default TMDBServices;
