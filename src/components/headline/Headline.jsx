import React from "react";

import "./Headline.scss";

const Headline = ({ headline }) => {
  return (
    // pass a prop named headline to this component with the text it should display
    <div className="headline">
      <h2>{headline}</h2>
    </div>
  );
};

export default Headline;
