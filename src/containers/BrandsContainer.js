import React from "react";
import { Col, Divider, Row } from "antd";
import rawlings from "../assets/img/rawlings.jpg";
import underArmour from "../assets/img/underArmour.png";
import mizuno from "../assets/img/mizuno.png";
import nike from "../assets/img/nike.png";

export const BrandsContainer = () => {
  return (
    <Row className="globalMargin mt-3">
      <Col span={24} style={{ justifyContent: "center", display: "flex" }}>
        <h1>Las mejores marcas</h1>
      </Col>
      <Divider />
      <Col span={24}>
        <Row justify="space-around">
          <Col
            className="gutter-row"
            md={6}
            lg={5}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img src={rawlings} alt="" height={70} width={120} />
          </Col>
          <Col
            className="gutter-row"
            md={6}
            lg={5}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img src={underArmour} alt="" height={70} width={120} />
          </Col>
          <Col
            className="gutter-row"
            md={6}
            lg={5}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img src={mizuno} alt="" height={70} width={120} />
          </Col>
          <Col
            className="gutter-row"
            md={6}
            lg={5}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img src={nike} alt="" height={70} width={120} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
