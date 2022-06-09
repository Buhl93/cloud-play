import React from "react";

import "./Headline.scss";

const Headline = ({ headline }) => {
  return (
    <div className="headline">
      <h2>{headline}</h2>
    </div>
  );
};

export default Headline;
