/* eslint-disable no-undef */

const TRANSLATIONS_LISTS_INDEX_PATH = '/api/translations_lists';
const TRANSLATIONS_LIST_PATH_BASE = '/api/translations_lists/';

function translationsListIndex(cb) {
  return apiRequest(TRANSLATIONS_LISTS_INDEX_PATH, cb);
}

function translationsList(id, cb) {
  let translationsListPath = TRANSLATIONS_LIST_PATH_BASE + id;
  return apiRequest(translationsListPath, cb);
}

function apiRequest(path, cb) {
  return fetch(path, {
    accept: 'application/json',
  }).then(checkStatus)
    .then(parseJSON)
    .then(cb);
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  console.log(error); // eslint-disable-line no-console
  throw error;
}

function parseJSON(response) {
  return response.json();
}

const Client = { translationsListIndex, translationsList };
export default Client;