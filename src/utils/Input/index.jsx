import { useState } from "react";
import "./input.scss";

export const Input = ({
  type = "text",
  value,
  handleChange,
  placeholder = "input",
  className = "primary-search",
}) => {
  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      maxLength="20"
      value={value}
      onChange={handleChange}
    />
  );
};
