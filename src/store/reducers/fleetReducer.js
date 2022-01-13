import {
  ADD_FAVORITE_STARSHIP,
  REMOVE_FAVORITE_STARSHIP,
  ADD_PEOPLE_TO_STARSHIP,
  REMOVE_PEOPLE_TO_STARSHIP,
} from "../actions/types";
import toast from "react-hot-toast";
import { parseInteger } from "../../utils";

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
      if (index === -1) {
        toast.success("Starship successfully added ");
        return [...state, action.payload];
      } else {
        toast.error("This Starship is already in your fleet ");
        return state;
      }
    case REMOVE_FAVORITE_STARSHIP:
      return state.filter((e) => {
        if (e.name !== action.payload.name) {
          return true;
        }
        return false;
      });
    case ADD_PEOPLE_TO_STARSHIP:
      return state.filter((e) => {
        if (e.name === action.payload.starship_name) {
          let index = e.userPassengers.findIndex(
            (el) => el.name === action.payload.name
          );
          if (index === -1) {
            //chek maximum capacity before adding
            if (
              e.userPassengers.length <
              parseInteger(e.passengers) + parseInteger(e.crew)
            ) {
              e.userPassengers.push({
                name: action.payload.name,
                gender: action.payload.gender,
              });
              toast.success("Person successfully added ");
              return state;
            } else {
              toast.error("Starship is full");
              return state;
            }
          } else {
            toast.error("This Person is already in this starship ");
            return state;
          }
        }
        return false;
      });
    case REMOVE_PEOPLE_TO_STARSHIP:
      return state.filter((e) => {
        if (e.name === action.payload.starship_name) {
          let index = e.userPassengers.findIndex(
            (el) => el.name === action.payload.name
          );

          e.userPassengers.splice(index, 1);

          toast.success("Person successfully  removed ");
          return state;
        }

        return false;
      });

    default:
      return state;
  }
}
