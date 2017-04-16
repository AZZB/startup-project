import { BASE_URL } from '../config';
import { ajax } from '../ajax';



export const getUserByUsername = (username) => {
  const url = `${BASE_URL}/api/user/username/${username}`;
  return ajax(url, { method: 'GET' });
}
