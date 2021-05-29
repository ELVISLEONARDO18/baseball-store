import { Col, Row } from "antd";
import React from "react";
import ball from "../assets/img/ball.jpg";

export const PitchContainer = () => {
  return (
    <Row className="globalMargin mt-3">
      <Col span={24}>
        <h1>La empresa</h1>
      </Col>
      <Col span={24}>
        <Row>
          <Col md={24} lg={12}>
            <p>
              La empresa baseball store es una comercializadora de artículos de
              baseball.
              <br />
              Contamos con un gran catálogo de camisas, zapatos, guantes, entre
              otros artículos para la practica de este famoso deporte.
              <br />
              Te ofrecemos artículos de marcas reconocidas y probadas en el
              mercado por su larga trayectoria.
              <br />
              Precios inigualables y competitivos al mercado actual.
            </p>
          </Col>
          <Col md={24} lg={12}>
            <img src={ball} alt="" className="img-about" />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
