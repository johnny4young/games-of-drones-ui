import React from "react";
import styled from "styled-components";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import Home from "./app/screens/home";
import Login from "./app/screens/login";
import Play from "./app/screens/play";
import Result from "./app/screens/result";
import PrivateRoute from "./app/components/privateRoutes";

import store from "./app/store";

const StyledWrapper = styled.div``;

const App = () => (
  <Provider store={store}>
    <StyledWrapper className="App-header">
      <Router>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/login" exact component={Login}></Route>
          <PrivateRoute path="/play" component={Play}></PrivateRoute>
          <PrivateRoute path="/result" component={Result}></PrivateRoute>
          <Route
            component={() => (
              <div>
                <h2>Error 404</h2>
                <span>Page not found</span>
              </div>
            )}
          ></Route>
        </Switch>
      </Router>
    </StyledWrapper>
  </Provider>
);

export default App;
