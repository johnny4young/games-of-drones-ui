export const selectWinner = (
  player1Name,
  player2Name,
  player1Option,
  player2Option
) => {
  switch (player1Option) {
    case "1":
      if (player2Option === "2") return { name: player2Name, player: "player2" };
      if (player2Option === "3") return { name: player1Name, player: "player1" };
      if (player2Option === "1") return { draw: true };
      /* falls through */
    case "2":
      if (player2Option === "3") return { name: player2Name, player: "player2" };
      if (player2Option === "1") return { name: player1Name, player: "player1" };
      if (player2Option === "2") return { draw: true };
      /* falls through */
    case "3":
      if (player2Option === "1") return { name: player2Name, player: "player2" };
      if (player2Option === "2") return { name: player1Name, player: "player1" };
      if (player2Option === "3") return { draw: true };
      /* falls through */
    default:
      return { draw: true };
  }
};
