import React from "react";
import "./BusinessCard.styles.scss";

function BusinessCard(props) {
  return (
    <div className="business-card-wrapper">
      <p className="title">{props.title}</p>
      <p className="description">{props.description}</p>
    </div>
  );
}

export default BusinessCard;
