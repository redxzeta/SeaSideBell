import axios from "axios";

import { GET_HEROES } from "./types";
export const getHeroes = () => dispatch => {
  axios
    .get("https://api.epicsevendb.com/api/hero/")
    .then(res => {
      dispatch({
        type: GET_HEROES,
        payload: res.data.results
      });
    })
    .catch(err => console.log(err));
};
