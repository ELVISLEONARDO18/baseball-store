import { Col, Row } from "antd";
import React from "react";
import { Card } from "../components/Card";
import zapatos1 from "../assets/img/zapatos1.jpg";
import zapatos2 from "../assets/img/zapatos2.jpg";
import zapatos3 from "../assets/img/zapatos3.jpg";
import zapatos4 from "../assets/img/zapatos4.jpg";

export const ShoesContainer = () => {
  return (
    <Row className="globalMargin mt-3">
      <Col span={24}>
        <h1>Zapatos</h1>
      </Col>
      <Col span={24}>
        <Row justify="space-around" className="section">
          <Col className="gutter-row" md={6} lg={5}>
            <Card
              source={zapatos1}
              title={"$ 60"}
              description={"Zapatos de ganchos Under Armour"}
            />
          </Col>
          <Col className="gutter-row" md={6} lg={5}>
            <Card
              source={zapatos2}
              title={"$ 80"}
              description={"Zapatos de ganchos Nike edición especial"}
            />
          </Col>
          <Col className="gutter-row" md={6} lg={5}>
            <Card
              source={zapatos3}
              title={"$ 45"}
              description={"Zapatos de ganchos Mizuno blancos"}
            />
          </Col>
          <Col className="gutter-row" md={6} lg={5}>
            <Card
              source={zapatos4}
              title={"$ 40"}
              description={"Zapatos de ganchos Under Armour negros"}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
