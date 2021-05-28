import React from "react";
import { Col, Row } from "antd";
import { Card } from "../components/Card";
import camisaHarper from "../assets/img/camisaHarper.jpg";
import casco from "../assets/img/casco-rawlings.jpg";
import guanteRawligns from "../assets/img/guante-rawlings.png";
import pelotaCompromiso from "../assets/img/cubrebocas-new-york.jpg";

export const BetsSellerContainer = () => {
  return (
    <Row className="globalMargin mt-3">
      <Col span={24}>
        <h1>Mas vendidos</h1>
      </Col>
      <Col span={24}>
        <Row justify="space-around" className="section">
          <Col className="gutter-row" md={6} lg={5}>
            <Card
              source={camisaHarper}
              title={"$ 20"}
              description={"Camisa de Brais Harper"}
            />
          </Col>
          <Col className="gutter-row" md={6} lg={5}>
            <Card
              source={casco}
              title={"$ 50"}
              description={"Casco Rawlings"}
            />
          </Col>
          <Col className="gutter-row" md={6} lg={5}>
            <Card
              source={guanteRawligns}
              title={"$ 55"}
              description={"Guante Rawlings"}
            />
          </Col>
          <Col className="gutter-row" md={6} lg={5}>
            <Card
              source={pelotaCompromiso}
              title={"$ 15"}
              description={"Cubrebocas de Yankees"}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
