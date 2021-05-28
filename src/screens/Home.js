import React from "react";
import { Col, Layout, Row, Card as CardAntd } from "antd";
import { Slider } from "../components/Slider";
import { Card } from "../components/Card";
const { Content } = Layout;

const gridStyle = {
  width: "25%",
  textAlign: "center",
};

export const Home = () => {
  return (
    <Content style={{ marginBottom: 100 }}>
      <Slider />

      <Row className="globalMargin">
        <Col span={24}>
          <h1>Mas vendidos</h1>
        </Col>
        <Row gutter={4} style={{ backgroundColor: "white" }}>
          <Col span={5}>
            <Card />
          </Col>
          <Col span={5}>
            <Card />
          </Col>
          <Col span={5}>
            <Card />
          </Col>
          <Col span={5}>
            <Card />
          </Col>
        </Row>
      </Row>
    </Content>
  );
};
