import React from "react";
import { Switch, Route } from "react-router-dom";
import { About } from "../screens/About";
import { Home } from "../screens/Home";
import { Contact } from "../screens/Contact";

export const Navigator = () => {
  return (
    <Switch>
      <Route path="/baseball-store/nosotros">
        <About />
      </Route>
      <Route path="/baseball-store/Contact">
        <Contact />
      </Route>
      <Route path="/baseball-store/">
        <Home />
      </Route>
    </Switch>
  );
};
