import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  savePlayerOption,
  saveRound,
  saveWinner,
  drawRound
} from "../../store/actions";
import { selectWinner } from "./utils";
import saveWinnerApi from "../../api/saveWinner";

import Button from "../../components/button";
import Score from "./score";

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
  padding: 50px;
`;

const StyledSelect = styled.select`
  width: 400px;
  height: 40px;
  font-size: 20px;
`;

const PlayComponent = ({
  rounds,
  player1Name,
  player2Name,
  player1Played,
  player2Played,
  player1Option,
  player1Points,
  player2Points,
  history,
  dispatch
}) => {
  const [option, setOption] = useState("1");

  const redirectToResult = () => {
    history.push("/result");
  };

  useEffect(() => {
    if (player1Points === 3) {
      dispatch(saveWinner({ winner: player1Name }));
      saveWinnerApi(player1Name, redirectToResult);
    } else if (player2Points === 3) {
      dispatch(saveWinner({ winner: player2Name }));
      saveWinnerApi(player2Name, redirectToResult);
    }
  }, [player1Points, player2Points]);

  const selectOption = ({ target: { value } }) => setOption(value);

  const saveOption = player => {
    dispatch(savePlayerOption({ player, selectedOption: option }));
    if (player === "player2") {
      const { draw, player, name } = selectWinner(
        player1Name,
        player2Name,
        player1Option,
        option
      );
      if (draw) {
        dispatch(drawRound());
      } else {
        dispatch(
          saveRound({
            winner: player,
            winnerName: name
          })
        );
      }
    }
    //reset select
    setOption(1);
  };

  return (
    
    <StyledContainer>
      <StyledDiv>
        <h1>Round {rounds.length + 1}</h1>
        <h3>{!player1Played ? player1Name : !player2Played && player2Name}</h3>
        <div>
          <label htmlFor="move">Select Move: </label>
          <StyledSelect name="move" onChange={selectOption}>
            <option value="1" selected={ option === "1"}>Rock</option>
            <option value="2" selected={ option === "2"}>Paper</option>
            <option value="3" selected={ option === "3"}>Scissors</option>
          </StyledSelect>
        </div>
        <Button
          onClick={() =>
            saveOption(!player1Played ? "player1" : !player2Played && "player2")
          }
        >
          OK
        </Button>
      </StyledDiv>
      {rounds.length > 0 && (
        <StyledDiv>
          <Score rounds={rounds} />
        </StyledDiv>
      )}
    </StyledContainer>
  );
};

const mapStateToProps = state => {
  const {
    game: {
      player1: {
        name: player1Name,
        played: player1Played,
        selectedOption: player1Option,
        points: player1Points
      },
      player2: {
        name: player2Name,
        played: player2Played,
        selectedOption: player2Option,
        points: player2Points
      },
      rounds
    }
  } = state;

  return {
    rounds,
    player1Name,
    player2Name,
    player1Played,
    player2Played,
    player1Option,
    player2Option,
    player1Points,
    player2Points
  };
};

export default withRouter(connect(mapStateToProps)(PlayComponent));
