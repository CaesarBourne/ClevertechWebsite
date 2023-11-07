import React from "react";

export const Img = ({ values }) => {
  const { alt, src } = values;

  return <img src={src} alt={alt} className="oka" />;
};
