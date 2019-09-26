import axios from "axios";
import { BASE_URL } from "../constants";

const getWinner = (updateWinners, limit, offset) =>
  axios
    .get(`${BASE_URL}/players?limit=${limit}&offset=${offset}`)
    .then(result => updateWinners(result.data.rows, result.data.count, result.data.limit, result.data.offset))
    .catch(error => console.log(error));

export default getWinner;
