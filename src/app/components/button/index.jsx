import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
  height: 50px;
  width: 200px;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  color: white;
  font-size: 17px;
  background: linear-gradient(
    160deg,
    #2cee71,
    #00d78c,
    #00be9f,
    #00a3a7,
    #0088a3,
    #006e94,
    #00547c,
    #003b5d
  );
  box-shadow: 0px 2px 3px 1px #0000008c;
  outline: none;
  transition: 300ms;
  margin: 10px 0px;
  &:hover {
    box-shadow: 0px 0px 1px 0px #0000008c;
  }
`;

const Button = ({ type, onClick, children }) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  type: "button",
  onClick: null
};

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired
};

export default Button;
