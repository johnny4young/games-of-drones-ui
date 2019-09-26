import React from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const StyledLoader = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  width: 50px;
  height: 50px;
  border: 5px solid transparent;
  border-top: 5px solid #4b7bec;
  border-left: 5px solid #4b7bec;
  border-radius: 50%;
`;

const Loader = () => (
  <span>
    <p>Loading...</p>
    <StyledLoader />
  </span>
);

export default Loader;
