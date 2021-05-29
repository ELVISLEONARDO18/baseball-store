import React from "react";
import { Layout } from "antd";
import { Slider } from "../components/Slider";
import { BetsSellerContainer } from "../containers/BetsSellerContainer";
import { ShoesContainer } from "../containers/ShoesContainer";
import { OffertContainer } from "../containers/OffertContainer";
import { BrandsContainer } from "../containers/BrandsContainer";

const { Content } = Layout;

export const Home = () => {
  return (
    <Content style={{ marginBottom: 100 }}>
      <Slider />
      <BetsSellerContainer />
      <OffertContainer />
      <ShoesContainer />
      <BrandsContainer />
    </Content>
  );
};
