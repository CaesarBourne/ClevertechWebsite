import React from "react";

export const A = ({ values }) => {
  const { href, label } = values;

  const handleClick = (event) => {
    event.preventDefault();
    window.open(href, "_blank", "noopener,noreferrer");
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </a>
  );
};
