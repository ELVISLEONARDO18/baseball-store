import React from "react";
import { useParams } from "react-router";

export const Contact = () => {
  const { id } = useParams();
  return <div>Product: {id}</div>;
};
