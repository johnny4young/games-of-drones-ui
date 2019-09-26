import React from "react";

import Table from "../../../components/table";

import { StyledTd, StyledTr } from "../../../components/table/styles";

const Score = ({ rounds }) => {
  return (
    <Table headers={["Round", "Winner"]}>
      {rounds.map((row, index) => (
        <StyledTr key={index}>
          <StyledTd>{row.roundNumber}</StyledTd>
          <StyledTd>{row.winner}</StyledTd>
        </StyledTr>
      ))}
    </Table>
  );
};

export default Score;
