import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { restartGame } from "../../store/actions";

import Button from '../../components/button';

const ResulComponent = ({ winner, history, dispatch }) => {
  const resetGame = () => {
    dispatch(restartGame());
    history.push("/login");
  };

  return (
    <div>
      <h1>We have a WINNER!!</h1>
      <h1>{winner} is the new EMPEROR!</h1>
      <Button onClick={resetGame}>Play Again</Button>
    </div>
  );
};

const mapStateToProps = state => {
  const {
    game: { winner }
  } = state;

  return { winner };
};

export default withRouter(connect(mapStateToProps)(ResulComponent));
