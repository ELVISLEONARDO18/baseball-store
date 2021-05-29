import React from "react";
import { BrandsContainer } from "../containers/BrandsContainer";
import { PitchContainer } from "../containers/PitchContainer";
import fondo3 from "../assets/img/background3.jpg";

export const About = () => {
  return (
    <div style={{ marginBottom: 100 }}>
      <img src={fondo3} alt="" className="img-slider" />
      <PitchContainer />
      <BrandsContainer />
    </div>
  );
};
