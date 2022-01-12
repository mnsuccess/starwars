import { ADD_FETCHED_DATA, ADD_FETCHED_DATA_SEARCH } from "../actions/types";

/**
 * API Starships Reducer
 * @param {*} state
 * @param {*} action
 * @returns
 */
export default function starshipsReducer(state = [], action) {
  switch (action.type) {
    case ADD_FETCHED_DATA:
      return [...action.payload.results];
    case ADD_FETCHED_DATA_SEARCH:
      return [...action.payload.results];

    default:
      return state;
  }
}
