import React from "react";

const Img = ({ values }) => {
  const { alt, src } = values;

  return <img src={src} alt={alt} />;
};

export default Img;
