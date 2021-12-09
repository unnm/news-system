import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "../pages/Login";
import NewsSandBox from "../pages/NewsSandBox";

export default function IndexRouter() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/login" component={Login} />
        {/* <Route path="/" component={NewsSandBox} /> */}
        <Route
          path="/"
          render={() =>
            localStorage.getItem("token") ? (
              <NewsSandBox />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
      </Switch>
    </HashRouter>
  );
}
