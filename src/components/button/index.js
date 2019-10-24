import React from "react";
import "./button.style.scss";

/** color props have to be [filled or transparent] */
const CustomButton = ({ text, color, ...OtherProps }) => {
  return (
    <button className={`button ${color}`} {...OtherProps}>
      {text}
    </button>
  );
};

export default CustomButton;
