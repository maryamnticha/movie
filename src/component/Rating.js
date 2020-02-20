import React from "react";
import Etoiles from "./Etoiles";

const Rating = ({ onChange, etoile }) => (
  <div className="rating-filter">
    <span className="rating-filter-text">Minimum Rating</span>
    <Etoiles
      etoile={etoile}
      onChangeEtoiles={newRating => {
        onChange(newRating);
      }}
    />
  </div>
);

export default Rating;
