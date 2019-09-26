import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width};
  margin-top: 10px;
`;

const StyledErrorText = styled.span`
  color: red;
  margin: 5px;
`;

const StyledInput = styled.input`
  height: 40px;
  border-radius: 5px;
  border: ${({ error }) => (error ? "1px solid red" : "1px solid grey")};
`;

const Input = ({ width, type, text, name, value, handleChange, error }) => {
  return (
    <StyledInputContainer width={width}>
      <label htmlFor={name}>{text}</label>
      <StyledInput
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        error={error ? true : false}
      />
      {error && <StyledErrorText>{error}</StyledErrorText>}
    </StyledInputContainer>
  );
};

Input.defaultProps = {
  width: "200px",
  type: "text",
  text: "Write some here...",
  error: null
};

Input.propTypes = {
  width: PropTypes.string,
  type: PropTypes.string,
  text: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default Input;
