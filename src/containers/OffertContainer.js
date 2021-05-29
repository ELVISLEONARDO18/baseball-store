import { Col, Divider, Row } from "antd";
import React from "react";
import { Card } from "../components/Card";
import zapatos1 from "../assets/img/camisa1.jpg";
import zapatos2 from "../assets/img/gorra1.jpg";
import zapatos3 from "../assets/img/lentes1.jpg";
import zapatos4 from "../assets/img/medias.jpg";
import gauntines from "../assets/img/guantines.jpg";
import munieco from "../assets/img/munieco.jpg";
import sudadera from "../assets/img/sudadera.jpg";

export const OffertContainer = () => {
  return (
    <Row className="globalMargin mt-3">
      <Col span={24}>
        <h1>Ofertas de la semana</h1>
      </Col>
      <Col span={24}>
        <Row justify="space-around" className="section">
          <Col className="gutter-row" md={6} lg={5}>
            <Card
              source={zapatos1}
              title={"$ 10"}
              description={"Camisa de los Dodgers"}
            />
          </Col>
          <Col className="gutter-row" md={6} lg={5}>
            <Card
              source={zapatos2}
              title={"$ 8"}
              description={"Gorra Yankees. edición especial"}
            />
          </Col>
          <Col className="gutter-row" md={6} lg={5}>
            <Card
              source={zapatos3}
              title={"$ 12"}
              description={"Lentes para el sol"}
            />
          </Col>
          <Col className="gutter-row" md={6} lg={5}>
            <Card
              source={zapatos4}
              title={"$ 5"}
              description={"Medias retro"}
            />
          </Col>
          <Divider />

          <Col className="gutter-row mt-3" md={6} lg={5}>
            <Card
              source={gauntines}
              title={"$ 40"}
              description={"Guantes de bateo"}
            />
          </Col>
          <Col className="gutter-row mt-3" md={6} lg={5}>
            <Card
              source={munieco}
              title={"$ 10"}
              description={"Muñeco cabeza de globo"}
            />
          </Col>
          <Col className="gutter-row mt-3" md={6} lg={5}>
            <Card source={sudadera} title={"$ 10"} description={"sudadera"} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
