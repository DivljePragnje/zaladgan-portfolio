import React from "react";
import "./PortfolioCard.styles.scss";
function PortfolioCard(props) {
  const imageUrl = require(`../../images/designs/${props.name}.jpg`);
  return (
    <div
      className="portfolio-item col-sm-4"
      style={{
        backgroundImage: `url(${imageUrl.default})`,
      }}
    ></div>
  );
}

export default PortfolioCard;
