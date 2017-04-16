import HttpError from './HttpError';



export function ajax(url, { method= 'GET', headers = {}, body={}} = {}) {

  method = method.toLowerCase();

  let defaultHeaders = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  };

  headers = Object.assign(defaultHeaders, headers);
  // headers = { ...defaultHeaders, ...headers };
  const options = {
    method,
    headers
  };

  (method !== 'get' && method !== 'head')? options.body = JSON.stringify(body) : void 0;


  return fetch(url, options).then(checkStatus).then(getJSON);
}


function checkStatus(response) {
  if(response.status >= 200 && response.status < 300 ) {
    return Promise.resolve(response);
  }

  return Promise.reject(new HttpError(response));
}



function getJSON(response) {
  return response.json();
}
