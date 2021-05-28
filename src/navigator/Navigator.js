import React from "react";
import { Switch, Route } from "react-router-dom";
import { About } from "../screens/About";
import { Home } from "../screens/Home";
import { Product } from "../screens/Product";

export const Navigator = () => {
  return (
    <Switch>
      <Route path="/About">
        <About />
      </Route>
      <Route path="/Product/:id">
        <Product />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};
