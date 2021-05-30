import React from "react";
import { Switch, Route } from "react-router-dom";
import { About } from "../screens/About";
import { Home } from "../screens/Home";
import { Contact } from "../screens/Contact";

export const Navigator = () => {
  return (
    <Switch>
      <Route path="/nosotros">
        <About />
      </Route>
      <Route path="/Contact">
        <Contact />
      </Route>
      <Route path="https://elvisleonardo18.github.io/baseball-store/">
        <Home />
      </Route>
    </Switch>
  );
};
