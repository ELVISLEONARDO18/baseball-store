import React from "react";
import { Carousel } from "antd";

import fondo1 from "../assets/img/background1.jpg";
import fondo2 from "../assets/img/background2.jpg";
import fondo3 from "../assets/img/background3.jpg";
import fondo4 from "../assets/img/background4.jpg";
import fondo5 from "../assets/img/background5.jpg";

export const Slider = () => {
  return (
    <Carousel autoplay>
      <div>
        <img src={fondo1} className="img-slider" alt="" />
      </div>
      <div>
        <img src={fondo2} className="img-slider" alt="" />
      </div>
      <div>
        <img src={fondo3} className="img-slider" alt="" />
      </div>
      <div>
        <img src={fondo4} className="img-slider" alt="" />
      </div>
      <div>
        <img src={fondo5} className="img-slider" alt="" />
      </div>
    </Carousel>
  );
};
