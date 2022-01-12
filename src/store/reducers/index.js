import { combineReducers } from "redux";
import starshipsReducer from "./starshipsReducer";
import fleetReducer from "./fleetReducer";

export default combineReducers({
  starships: starshipsReducer,
  fleet: fleetReducer,
});
