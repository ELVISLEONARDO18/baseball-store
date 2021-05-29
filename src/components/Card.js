import React from "react";
import { Card as CardAntd } from "antd";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";

const { Meta } = CardAntd;
//   hoverable

export const Card = ({ source, title, description }) => {
  return (
    <CardAntd
      style={{ margin: "20px 0px" }}
      cover={<img alt="example" src={source} height={220} width={120} />}
      actions={[<ShoppingCartOutlined />, <EyeOutlined />]}
    >
      <Meta
        // avatar={
        //   <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        // }
        title={title}
        description={description}
      />
    </CardAntd>
  );
};
