import axios from 'axios';
import constants from '../constants';

const makeRequest = (id) => {
  return axios.get(`http://react-cdp-api.herokuapp.com/movies/${id}`);
};

const fetchMovie = id => (dispatch) => {
  window.scrollTo(0, 0);
  const request = makeRequest(id);
  return request.then((result) => {
    dispatch({
      type: constants.GET_SINGLE_MOVIE,
      payload: result.data,
    });
  });
};

// const fetchMovie = movie => (dispatch) => {
//   console.log('movie', movie)
//   return dispatch({
//     type: constants.GET_SINGLE_MOVIE,
//     payload: movie,
//   });
// };

// const fetchMovie = movie => {
//   return {
//     type: constants.GET_SINGLE_MOVIE,
//     payload: movie,
//   };
// };

export { makeRequest };

export default fetchMovie;
