import React from "react";
import { Layout } from "antd";
const { Footer } = Layout;

export const FooterContainer = () => {
  return (
    <Footer
      style={{
        textAlign: "center",
        backgroundColor: "#0A1930",
        color: "white",
        // position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
      }}
    >
      Baseball store ©2021 Created by Elvis Muñoz
    </Footer>
  );
};
