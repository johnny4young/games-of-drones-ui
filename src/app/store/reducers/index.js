import {
  SAVE_PLAYERS_NAME,
  SAVE_PLAYERS_OPTION,
  SAVE_WINNER,
  SAVE_ROUND,
  RESET_GAME,
  DRAW_ROUND
} from "../actionTypes";

export const gameReducer = (
  state = {
    winner: null,
    rounds: [],
    player1: { name: "", played: false, selectedOption: null, points: 0 },
    player2: { name: "", played: false, selectedOption: null, points: 0 }
  },
  action
) => {
  switch (action.type) {
    case SAVE_PLAYERS_NAME:
      return {
        ...state,
        player1: { ...state.player1, name: action.data.player1 },
        player2: { ...state.player2, name: action.data.player2 }
      };
    case SAVE_PLAYERS_OPTION:
      return {
        ...state,
        [action.data.player]: {
          ...state[action.data.player],
          played: true,
          selectedOption: action.data.selectedOption
        }
      };
    case SAVE_ROUND:
      return {
        ...state,
        rounds: [
          ...state.rounds,
          {
            roundNumber: state.rounds.length + 1,
            winner: action.data.winnerName
          }
        ],
        player1: { ...state.player1, played: false, selectedOption: null },
        player2: { ...state.player2, played: false, selectedOption: null },
        [action.data.winner]: {
          ...state[action.data.winner],
          points: state[action.data.winner].points + 1,
          played: false,
          selectedOption: null
        }
      };
    case SAVE_WINNER:
      return {
        ...state,
        winner: action.data.winner
      };
    case RESET_GAME:
      return {
        ...state,
        winner: null,
        rounds: [],
        player1: { name: "", played: false, selectedOption: null, points: 0 },
        player2: { name: "", played: false, selectedOption: null, points: 0 }
      };
    case DRAW_ROUND:
      return {
        ...state,
        rounds: [
          ...state.rounds,
          {
            roundNumber: state.rounds.length + 1,
            winner: "Draw"
          }
        ],
        player1: { ...state.player1, played: false, selectedOption: null },
        player2: { ...state.player2, played: false, selectedOption: null }
      };
    default:
      return state;
  }
};
