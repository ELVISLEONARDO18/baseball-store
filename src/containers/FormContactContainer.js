import React from "react";
import { Col, Row } from "antd";
import { FormContact } from "../components/FormContact";

export const FormContactContainer = () => {
  return (
    <Row className="globalMargin mt-3">
      <Col
        span={24}
        style={{
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>¿Quieres decirnos algo? </h1>
        <p>
          Contacta con alguno de nosotros de forma programada. Uno de nuestros{" "}
          <br />
          especialistas te contactará tan pronto como sea posible
        </p>
      </Col>
      <Col span={18}>
        <FormContact />
      </Col>
    </Row>
  );
};
