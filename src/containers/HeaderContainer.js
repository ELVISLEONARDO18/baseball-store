import React from "react";
import { Menu, Layout } from "antd";
import { HomeOutlined } from "@ant-design/icons";

import { Link } from "react-router-dom";
const { Header } = Layout;

export const HeaderContainer = () => {
  return (
    <Header style={{ height: 80, padding: 5 }}>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        style={{
          alignItems: "center",
          display: "flex",
        }}
      >
        <Menu.Item key="1">
          <Link to="/" style={{ alignItems: "center", display: "flex" }}>
            <HomeOutlined
              style={{ color: "white", fontSize: 45, padding: 9.5 }}
            />
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/About">Nosotros</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};
