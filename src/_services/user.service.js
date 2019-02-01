import axios from 'axios';
import localforage from 'localforage';
import { config } from '../_helpers';

function logout() {
  // remove user from local storage to log user out
  localforage.clear();
}

function handleResponse(response) {
  const data = response.data;
  if (!response.statusText === 'OK') {
    if (response.status === 401) {
      // auto logout if 401 response returned from api
      logout();
      location.reload(true);
    }

    const error = (data && data.message) || response.statusText;
    return Promise.reject(error);
  }

  return data;
}

async function login(username, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: JSON.stringify({ email: username, password }),
  };

  return axios(`${config.apiUrl}/login`, requestOptions)
    .then(handleResponse)
    .then((userData) => {
      // login successful if there's a jwt token in the response
      if (userData.token) {
        // store user details and jwt token in local storage
        // to keep user logged in between page refreshes
        localforage.setItem('user', JSON.stringify(userData));
      }

      return userData;
    });
}

// async function register(user) {
//   const requestOptions = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     data: JSON.stringify(user),
//   };

//   return axios(`${config.apiUrl}/users/register`, requestOptions).then(handleResponse);
// }

// eslint-disable-next-line import/prefer-default-export
export const userService = {
  login,
  logout,
  // register,
};
