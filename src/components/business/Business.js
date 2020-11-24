import React from "react";
import "./Business.styles.scss";
import BusinessCard from "./BusinessCard";

const cardData = [
  {
    title: "EXTENSIVE EXPERIENCE",
    description:
      "Using the lessons learned from years of experience, I will ensure your project is pixel perfect, unique, and cost effective.",
  },

  {
    title: "YOU'LL BE WORKING WITH ME ONLY",
    description:
      "You project won't be outsourced, to any unscrupulous practices, nor juggled around between different designers. You will be working with me only.",
  },

  {
    title: "VERY FAST TURNAROUND",
    description:
      "My clients are impressed with how quick I deliver solutions. You'll never wait long for my response.",
  },
];

function Business() {
  const renderCards = () => {
    return cardData.map((card, index) => {
      return (
        <BusinessCard
          key={index}
          title={card["title"]}
          description={card["description"]}
        ></BusinessCard>
      );
    });
  };
  return (
    <div className="business-wrapper" id="about-wrapper">
      <div className="business-text">
        <h4>
          <center>ALL IT TAKES TO BUILD A BRAND</center>
        </h4>
        <p>
          Create a stunning logo and let the wind blow in the right direction. I
          will always be there for you to support your business and your dream.
        </p>
      </div>
      <div className="business-cards">{renderCards()}</div>
    </div>
  );
}

export default Business;
