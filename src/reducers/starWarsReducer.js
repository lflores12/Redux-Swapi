import {
  FETCHING_CHARACTERS_SUCCESS,
  FETCHING_CHARACTERS_FAILURE,
  FETCHING_CHARACTERS
} from "../actions";


const initialState = {
  characters: [],
  fetching: false,
  error: null
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_CHARACTERS: 
      return {
        ...state,
        fetching: true,
        error: ''
    };

    case FETCHING_CHARACTERS_SUCCESS: 
      return {
        ...state,
        fetching: false,
        error: '',
        characters: [...state.characters, ...action.payload]
      };

    case FETCHING_CHARACTERS_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    default:
      return state;
  }
};
