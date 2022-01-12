import {
  ADD_FETCHED_DATA,
  ADD_FETCHED_DATA_SEARCH,
  ADD_FAVORITE_STARSHIP,
  REMOVE_FAVORITE_STARSHIP,
} from "./types.js";

import axios from "axios";

/*
https://swapi.dev/api/starships or people
view the star war API https://swapi.dev/documentatio
*/
const URL = "https://swapi.dev/api/";
const endpoints = {
  starships: "starships",
  people: "people",
};

/**
 *
 *  Add Starhship to the Fleet
 * @param {*} data
 * @returns
 */
export const addFavoriteStarship = (data) => {
  return {
    type: ADD_FAVORITE_STARSHIP,
    payload: {
      name: data.name,
      model: data.model,
      starship_class: data.starship_class,
      manufacturer: data.manufacturer,

      crew: data.crew,
      passengers: data.passengers,
      userPassengers: [],
    },
  };
};

/**
 *  Remove Starship to the Fleet
 * @param {*} name
 * @returns
 */

export const removeFavoriteStarship = (name) => {
  return {
    type: REMOVE_FAVORITE_STARSHIP,
    payload: {
      name,
    },
  };
};

/**
 * Fetch starships from API using search Endpoint
 * ex https://swapi.dev/api/starships/?search=death
 * @param {*} param
 * @returns
 */
export const fetchSearchData = (param) => {
  return async (dispatch) => {
    return await axios
      .get(URL + endpoints.starships + "/?search=" + param)
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        dispatch({
          type: ADD_FETCHED_DATA_SEARCH,
          payload: data,
        });
      })
      .catch((error) => {
        throw error;
      });
  };
};

/**
 * Fetch  all the starship resources from API
 * ex https://swapi.dev/api/starships/
 * @param {*} param
 * @returns
 */
export const fetchData = () => {
  return async (dispatch) => {
    return await axios
      .get(URL + endpoints.starships)
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        dispatch({
          type: ADD_FETCHED_DATA,
          payload: data,
        });
      })
      .catch((error) => {
        throw error;
      });
  };
};
