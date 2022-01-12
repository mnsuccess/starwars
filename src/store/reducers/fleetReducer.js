import {
  ADD_FAVORITE_STARSHIP,
  REMOVE_FAVORITE_STARSHIP,
} from "../actions/types";

/**
 * Fleet Reducer
 * @param {*} state
 * @param {*} action
 * @returns
 */
export default function fleetReducer(state = [], action) {
  switch (action.type) {
    case ADD_FAVORITE_STARSHIP:
      //check if the  exist
      let index = state.findIndex((el) => el.name === action.payload.name);
      if (index === -1) return [...state, action.payload];
      return state;
    case REMOVE_FAVORITE_STARSHIP:
      return state.filter((e) => {
        if (e.name !== action.payload.name) {
          return true;
        }
        return false;
      });
    default:
      return state;
  }
}
