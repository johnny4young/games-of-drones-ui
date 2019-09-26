import axios from "axios";
import { BASE_URL } from "../constants";

const getWinner = updateWinners =>
  axios
    .get(`${BASE_URL}/players`)
    .then(result => updateWinners(result.data.rows))
    .catch(error => console.log(error));

export default getWinner;
