import React from "react";
import styled from "styled-components";

import Input from "../../../components/input";
import Button from "../../../components/button";

import { Link } from "react-router-dom";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginComponent = ({
  handleSubmit,
  handleChange,
  errors,
  values
}) => {
  return (
    <div>
      <h1>Enter Player's Names</h1>
      <StyledForm onSubmit={handleSubmit}>
        <Input
          width="400px"
          text="Player 1"
          name="player1"
          value={values.player1}
          handleChange={handleChange}
          error={errors.player1}
        />
        <Input
          width="400px"
          text="Player 2"
          name="player2"
          value={values.player2}
          handleChange={handleChange}
          error={errors.player2}
        />
        <Button type="submit">Start</Button>
        <Link to="/home">
          <Button>Go to home</Button>
        </Link>
      </StyledForm>
    </div>
  );
};

export default LoginComponent;
