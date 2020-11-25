import React from "react";
import "./ScoreboardCard.styles.scss";

function ScoreboardCard(props) {
  const getImageUrl = (imageName) => {
    const imageUrl = require(`../../images/icons/${imageName}.png`);
    return window.location.origin + imageUrl.default;
  };
  return (
    <div className="scoreboard-card-wrapper">
      <img
        className="scoreboard-card-image"
        src={getImageUrl(props.imageName)}
        alt=""
      ></img>
      <p className="score">{props.score}</p>
      <p>{props.title}</p>
    </div>
  );
}

export default ScoreboardCard;
