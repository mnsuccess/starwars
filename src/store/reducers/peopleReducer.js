import { ADD_FETCHED_DATA_SEARCH_PEOPLE } from "../actions/types";

/**
 * API Starships Reducer
 * @param {*} state
 * @param {*} action
 * @returns
 */
export default function peopleReducer(state = [], action) {
  switch (action.type) {
    case ADD_FETCHED_DATA_SEARCH_PEOPLE:
      return [...action.payload.results];
    default:
      return state;
  }
}
