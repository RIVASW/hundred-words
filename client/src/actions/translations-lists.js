import fetch from 'cross-fetch'

const TRANSLATIONS_LISTS_INDEX_PATH = '/api/translations_lists'

export const REQUEST_TRANSLATIONS_LISTS_INDEX = 'REQUEST_TRANSLATIONS_LISTS_INDEX'
export const RECEIVE_TRANSLATIONS_LISTS_INDEX = 'RECEIVE_TRANSLATIONS_LISTS_INDEX'

export const showTranslationsList = (listId) => {
  return {
    type: 'SHOW_TRANSLATIONS_LIST',
    listId,
  }
}

export const playTranslationsListWords = (listId) => {
  return {
    type : 'PLAY_TRANSLATIONS_LIST_WORDS',
    listId,
  }
}

export const playTranslationsListTranslations = (listId) => {
  return {
    type: 'PLAY_TRANSLATIONS_LIST_TRANSLATIONS',
    listId,
  };
};

export function requestTranslationsListsIndex() {
  return {
    type: REQUEST_TRANSLATIONS_LISTS_INDEX,
  }
}

export function receiveTranslationsListsIndex(json) {
  return {
    type: RECEIVE_TRANSLATIONS_LISTS_INDEX,
    listsIndex: json,
  }
}

export const getTranslationsList = (listId) => {
  return {
    type: 'GET_TRANSLATIONS_LIST',
    listId,
  };
};

export const updateTranslationsList = (listId) => {
  return {
    type: 'UPDATE_TRANSLATIONS_LIST',
    listId
  };
};


function fetchTranslationsListsIndex() {
  return dispatch => {
    dispatch(requestTranslationsListsIndex())
    return fetch(TRANSLATIONS_LISTS_INDEX_PATH)
      .then(response => response.json())
      .then(json => dispatch(receiveTranslationsListsIndex(json)))
  }
}
