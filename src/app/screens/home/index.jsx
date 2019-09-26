import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Button from "../../components/button";
import Table from "../../components/table";
import Loader from "../../components/loader";
import { StyledTd, StyledTr } from "../../components/table/styles";

import getWinner from "../../api/getWinners";

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

const HomeComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getWinner(setData);
  }, []);

  return (
    <StyledContainer>
      <StyledDiv>
        <h2>Home</h2>
        <Link to="/login">
          <Button>PLAY</Button>
        </Link>
        <p>Summary Games Played</p>
      </StyledDiv>
      <StyledDiv>
        {data.length ? (
          <Table headers={["Name", "Victories"]}>
            {data.map((row, index) => (
              <StyledTr key={index}>
                <StyledTd>{row.name}</StyledTd>
                <StyledTd>{row.victory}</StyledTd>
              </StyledTr>
            ))}
          </Table>
        ) : (
          <Loader />
        )}
      </StyledDiv>
    </StyledContainer>
  );
};

export default HomeComponent;
