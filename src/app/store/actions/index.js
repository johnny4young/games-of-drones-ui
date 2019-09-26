import {
  SAVE_PLAYERS_NAME,
  SAVE_PLAYERS_OPTION,
  SAVE_WINNER,
  SAVE_ROUND,
  RESET_GAME,
  DRAW_ROUND
} from "../actionTypes";

export const savePlayerNames = data => ({ type: SAVE_PLAYERS_NAME, data });

export const savePlayerOption = data => ({ type: SAVE_PLAYERS_OPTION, data });

export const saveWinner = data => ({ type: SAVE_WINNER, data });

export const saveRound = data => ({ type: SAVE_ROUND, data });

export const restartGame = () => ({ type: RESET_GAME });

export const drawRound = () => ({ type: DRAW_ROUND });
