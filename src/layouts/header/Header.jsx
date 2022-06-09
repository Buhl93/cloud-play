import React from "react";
import { Link } from "react-router-dom";
import { SiCloudflare } from "react-icons/si";

import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="header__logoHolder">
          <span className="header__logoHolder-arrow">
            <SiCloudflare />
          </span>
          CloudPlay
        </div>
      </Link>
      <Link to="/wishlist">Wishlist</Link>
    </div>
  );
};

export default Header;
