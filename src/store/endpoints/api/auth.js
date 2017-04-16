import { BASE_URL } from '../config';
import { ajax } from '../ajax';


export const signUp = (values) => {
  const url = BASE_URL + '/signup';

  return ajax(url, { method: 'POST', body: values});
};



export const login = (values) => {
  const url = BASE_URL + '/login';

  return ajax(url, { method: 'POST', body: values});
};


export const getLoggedUser = (token) => {
  const url = BASE_URL + '/api/loginWithToken';

  return ajax(url, {
    method: 'GET',
    headers: {
      'x-access-token': token,
    },
  });
}


export const fetchData = () => {
  const url = BASE_URL + '/api/data';

  return ajax(url, { method: 'GET'});
}
