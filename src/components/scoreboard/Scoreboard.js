import React from "react";
import "./Scoreboard.styles.scss";
import ScoreboardCard from "./ScoreboardCard";

const cardData = [
  {
    title: "HAPPY CLIENTS",
    score: 408,
  },
  {
    title: "PROJECTS COMPLETED",
    score: 559,
  },
  {
    title: "AWARDS WON",
    score: 209,
  },
];

function Scoreboard() {
  const renderScoreboradCards = () => {
    return cardData.map((card, index) => {
      return (
        <ScoreboardCard key={index} title={card.title} score={card.score} />
      );
    });
  };

  return <div className="scoreboard-wrapper">{renderScoreboradCards()}</div>;
}

export default Scoreboard;
