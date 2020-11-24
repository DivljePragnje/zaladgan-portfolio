import React from "react";
import "./Scoreboard.styles.scss";

function ScoreboardCard(props) {
  return (
    <div className="scoreboard-card-wrapper">
      <h1>{props.score}</h1>
      <p>{props.title}</p>
    </div>
  );
}

export default ScoreboardCard;
