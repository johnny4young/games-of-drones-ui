import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Button from "../../components/button";
import Table from "../../components/table";
import Loader from "../../components/loader";
import { StyledTd, StyledTr } from "../../components/table/styles";

import Pagination from 'rc-pagination';

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
  const [pageCount, setPageCount] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getWinner(loadWinnerFromServer, 10, Math.ceil((pageCount - 1) * 10));
  }, [pageCount]);


  const handlePageClick = (page) => { 
    setPageCount(page);
  };

  const loadWinnerFromServer = (rows, count, limit, offset) => {
    setData(rows);
    setTotal(count);
  }

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
          <>
          <Table headers={["Name", "Victories"]}>
            {data.map((row, index) => (
              <StyledTr key={index}>
                <StyledTd>{row.name}</StyledTd>
                <StyledTd>{row.victory}</StyledTd>
              </StyledTr>
            ))}
          </Table>
          <Pagination onChange={handlePageClick} current={pageCount} total={total} />
          </>
        ) : (
          <Loader />
        )}
      </StyledDiv>
    </StyledContainer>
  );
};

export default HomeComponent;
