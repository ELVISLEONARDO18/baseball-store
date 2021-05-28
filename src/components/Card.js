import React from "react";
import { Card as CardAntd } from "antd";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";

const { Meta } = CardAntd;
//   hoverable

export const Card = ({ source, title, description }) => {
  return (
    <CardAntd
      cover={<img alt="example" src={source} height={220} width={120} />}
      actions={[
        <ShoppingCartOutlined onClick={() => alert("Car")} />,
        <EyeOutlined onClick={() => alert("Ver")} />,
      ]}
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
