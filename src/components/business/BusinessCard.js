import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import "./BusinessCard.styles.scss";

function BusinessCard(props) {
  return (
    <div className="business-card-wrapper">
      <FontAwesomeIcon
        className="business-card-icon"
        icon={faUserCircle}
        size="3x"
      />
      <h5>{props.title}</h5>
      <p>{props.description}</p>
    </div>
  );
}

export default BusinessCard;
