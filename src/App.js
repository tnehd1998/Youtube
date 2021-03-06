import React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import "./App.css";
import styled from "styled-components";

import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import VideoPage from "./pages/VideoPage/VideoPage";

const AppFormat = styled.div`
  font-family: "Noto Sans KR", sans-serif;
`;

const App = () => (
  <Router>
    <AppFormat>
      <Header />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/search/:id" component={SearchPage} />
        <Route exact path="/video/:id" component={VideoPage} />
        <Redirect from="*" to="/" />
      </Switch>
    </AppFormat>
  </Router>
);

export default App;
