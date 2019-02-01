import localforage from 'localforage';

// eslint-disable-next-line import/prefer-default-export
export function authHeader() {
  // return authorization header with jwt token
  const user = JSON.parse(localforage.getItem('user'));

  if (user && user.token) {
    // eslint-disable-next-line quote-props
    return { 'Authorization': `Bearer ${user.token}` };
  }
  return {};
}
