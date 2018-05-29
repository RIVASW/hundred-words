/* eslint-disable no-undef */

const TRANSLATIONS_LISTS_INDEX_PATH = '/api/translations_lists';
const TRANSLATIONS_LIST_PATH_BASE = '/api/translations_lists/';
const TRANSLATIONS_LIST_CREATE_PATH = '/api/translations_lists/import_csv';

function translationsListIndex(cb) {
  return apiGetRequest(TRANSLATIONS_LISTS_INDEX_PATH, cb);
}

function translationsList(id, cb) {
  let translationsListPath = TRANSLATIONS_LIST_PATH_BASE + id;
  return apiGetRequest(translationsListPath, cb);
}

function createTranslationsList(json, cb){
  return apiPostRequest(TRANSLATIONS_LIST_CREATE_PATH, json, cb);
}

function apiGetRequest(path, cb) {
  return fetch(path, {
    headers: {
      'Accept': 'application/json'
    },
  }).then(checkStatus)
    .then(parseJSON)
    .then(cb);
}

function apiPostRequest(path, json, cb){
  return fetch(path, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(json)
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

const Client = { translationsListIndex, translationsList, createTranslationsList };
export default Client;