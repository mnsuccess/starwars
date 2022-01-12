import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import rootReducer from "./store/reducers";
//import { fetchData } from "./store/actions";

/**
 * Save the state in the local storage (user fleet)
 * @param {*} state
 */
const saveState = (state) => {
  if (state.fleet.length !== 0) {
    localStorage.setItem("state", JSON.stringify(state));
  }
};

/**
 * Get the current state in local storage (user fleet)
 * @returns
 */
const getState = () => {
  try {
    const s = localStorage.getItem("state");

    console.log("Getting state, ", s);
    if (s === null) return undefined;
    return JSON.parse(s);
  } catch (e) {
    return undefined;
  }
};

//initial state with the local storage fleet
const initialState = getState();

//create the store
const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
//store.dispatch(fetchData());

//subscribe to the store for any change regardless user fleet
store.subscribe(() => {
  saveState({
    fleet: store.getState().fleet,
  });
});

//render the  view and pass the store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
