import React from "react";
import "./Scoreboard.styles.scss";
import ScoreboardCard from "./ScoreboardCard";

const cardData = [
  {
    title: "HAPPY CLIENTS",
    imageName: "happy-clients",
    score: 408,
  },
  {
    title: "PROJECTS COMPLETED",
    imageName: "project-completed",
    score: 559,
  },
  {
    title: "AWARDS WON",
    imageName: "awards-won",
    score: 209,
  },
];

function Scoreboard() {
  const renderScoreboradCards = () => {
    return cardData.map((card, index) => {
      return (
        <ScoreboardCard
          key={index}
          title={card.title}
          score={card.score}
          imageName={card.imageName}
        />
      );
    });
  };

  return <div className="scoreboard-wrapper">{renderScoreboradCards()}</div>;
}

export default Scoreboard;
