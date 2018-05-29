import {
  REQUEST_TRANSLATIONS_LISTS_INDEX,
  RECEIVE_TRANSLATIONS_LISTS_INDEX,
} from '../actions/tranlations-lists'

const initialState = {
  isFeitching: false,
  listsIndex: null,
}

export default function translationsLists(state = initialState, action) {
  switch(action.type) {
    case REQUEST_TRANSLATIONS_LISTS_INDEX:
      return {...state,
        isFeitching: true,
      }
    case RECEIVE_TRANSLATIONS_LISTS_INDEX:
      return  {...state,
        isFeitching: false,
        listsIndex: action.listsIndex,
      }
    default:
      return state
  }
}
