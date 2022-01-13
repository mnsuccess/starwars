import { combineReducers } from "redux";
import starshipsReducer from "./starshipsReducer";
import fleetReducer from "./fleetReducer";
import peopleReducer from "./peopleReducer";

export default combineReducers({
  starships: starshipsReducer,
  fleet: fleetReducer,
  people: peopleReducer,
});
