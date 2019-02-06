import axios from 'axios';
import moment from 'moment';
import { authHeader, config } from '../_helpers';

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
  localStorage.removeItem('doekoes');
  localStorage.removeItem('updatedAt');
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

async function getAll() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader(),
  };
  // eslint-disable-next-line no-underscore-dangle
  return axios(`${config.apiUrl}/doekoes`, requestOptions)
    .then(handleResponse)
    .then((doekoes) => {
      localStorage.setItem('updatedAt', JSON.stringify(new Date().getTime()));
      localStorage.setItem('doekoes', JSON.stringify(doekoes));
      return doekoes;
    });
}


async function getById(id) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader(),
  };

  return axios(`${config.apiUrl}/doekoes/${id}`, requestOptions).then(handleResponse);
}

async function add(doekoe) {
  // Write quarter number to database for filtering
  const item = { ...doekoe };
  item.quarter = moment(doekoe.date).quarter();
  const requestOptions = {
    method: 'post',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    data: JSON.stringify(item),
  };
  return axios(`${config.apiUrl}/doekoes`, requestOptions).then(handleResponse);
}

async function update(doekoe) {
  const requestOptions = {
    method: 'PUT',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    data: JSON.stringify(doekoe),
  };

  return axios(`${config.apiUrl}/doekoes/${doekoe.id}`, requestOptions).then(handleResponse);
}

// prefixed function name with underscore because delete is a reserved word in javascript
// eslint-disable-next-line no-underscore-dangle
async function _delete(id) {
  const requestOptions = {
    method: 'DELETE',
    headers: authHeader(),
  };

  return axios(`${config.apiUrl}/doekoes/${id}`, requestOptions).then(handleResponse);
}

// eslint-disable-next-line import/prefer-default-export
export const doekoeService = {
  getAll,
  getById,
  update,
  delete: _delete,
  add,
};
