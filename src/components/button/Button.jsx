import React from "react";
import { Link } from "react-router-dom";

import "./Button.scss";

const Button = ({ link, children, type }) => {
  return (
    <Link
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
