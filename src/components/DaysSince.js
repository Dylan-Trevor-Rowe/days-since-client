import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"

export function DaysSinceRender() {
  return (
    <>
      <Route render={() => {
        if (localStorage.getItem("days_since_token")) {
          return <>
            <Route render={props => <ApplicationViews {...props} />} />
          </>;
        } else {
          return <Redirect to="/login" />;
        }
      }} />
      <Route path="/login" render={Login} />
      <Route path="/register" render={Register} />
    </>
  );
}


