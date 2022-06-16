import React from "react";
import { Link } from "react-router-dom";

import "./Button.scss";

const Button = ({ link, children, type }) => {
  return (
    <Link
    // button style is applied depending on what type is passed
      className={
        type === "primary" ? "primaryButton button" : "secondaryButton button"
      }
      to={link}
    >
      {children}
    </Link>
  );
};

export default Button;
