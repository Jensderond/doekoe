// eslint-disable-next-line import/prefer-default-export
export function authHeader() {
  // return authorization header with jwt token
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.token) {
    // eslint-disable-next-line quote-props
    return { 'Authorization': `Bearer ${user.token}` };
  }
  return {};
}
