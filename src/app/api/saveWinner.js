import axios from "axios";
import { BASE_URL } from "../constants";

const saveWinner = (winner,redirect) =>
  axios
    .put(`${BASE_URL}/players`,{name: winner})
    .then(() => redirect())
    .catch(error => console.log(error));

export default saveWinner;
