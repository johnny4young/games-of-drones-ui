import { createStore, combineReducers } from "redux";

import { REDUX_DEVTOOLS } from "../constants";

/* reducers */
import { gameReducer } from "./reducers";

const store = createStore(
  combineReducers({ game: gameReducer }),
  REDUX_DEVTOOLS
);

export default store;
