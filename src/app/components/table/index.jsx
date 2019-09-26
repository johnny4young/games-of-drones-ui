import React from "react";
import styled from "styled-components";

const StyledTable = styled.table`
  width: 100%;
  margin-bottom: 1rem;
  color: #212529;
  border-collapse: collapse;
`;

const StyledTh = styled.th`
  color: #fff;
  background-color: #343a40;
  border-color: #454d55;
`;

const Table = ({ headers, children }) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <StyledTh key={index}>{header}</StyledTh>
          ))}
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </StyledTable>
  );
};

export default Table;
