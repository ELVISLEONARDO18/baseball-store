import React from "react";
import { Layout } from "antd";
import { HeaderContainer } from "../containers/HeaderContainer";
import { Navigator } from "../navigator/Navigator";
import { HashRouter as Router } from "react-router-dom";
import { FooterContainer } from "../containers/FooterContainer";

export const Page = () => {
  return (
    <Layout className="layout">
      <Router basename="https://elvisleonardo18.github.io/baseball-store/">
        <HeaderContainer />
        <Navigator />
      </Router>
      <FooterContainer />
    </Layout>
  );
};
