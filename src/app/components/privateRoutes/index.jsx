import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({
  component: Component,
  player1Name,
  player2Name,
  ...rest
}) => {
  const isAllowed = player1Name.length > 0 && player2Name.length > 0;

  return (
    <Route
      {...rest}
      render={props =>
        isAllowed ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

PrivateRoute.defaultProps = {
  Component: null,
  rest: {},
};

PrivateRoute.propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  rest: PropTypes.object,
  player1Name: PropTypes.string.isRequired,
  player2Name: PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
  const {
    game: {
      player1: { name: player1Name },
      player2: { name: player2Name }
    }
  } = state;

  return {
    player1Name,
    player2Name
  };
}

export default connect(mapStateToProps)(PrivateRoute);
