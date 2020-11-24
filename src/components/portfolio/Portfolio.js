import React, { useState } from "react";
import PortfolioCard from "./PorfolioCard";
import "./Portfolio.styles.scss";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";

import CoreStyles from "react-awesome-slider/src/core/styles.scss";
import AnimationStyles from "react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const imagesName = [
  "ashby",
  "bird",
  "bug",
  "cleaning-flour-de-lis",
  "cooking-pin",
  "leagle",
  "mountain",
  "p",
  "spoons",
  "suv",
];

function Portfolio() {
  const [galleryOpen, setGalleryOpen] = useState(false);

  const renderGallery = () => {
    if (galleryOpen) {
      const imagePaths = imagesName.map((name, index) => {
        return <PortfolioCard name={name} key={index} />;
      });
      return (
        <div>
          <hr />
          <div className="row gallery">{imagePaths}</div>
          <hr />
        </div>
      );
    }
  };

  const renderSlider = () => {
    return imagesName.map((name, index) => {
      let path = "../../images/designs/" + name + ".jpg";
      return <div key={index} data-src={path}></div>;
    });
  };

  const handleGallery = () => {
    if (galleryOpen) {
      setGalleryOpen(false);
    } else {
      setGalleryOpen(true);
    }
  };

  return (
    <div className="container " id="portfolio-wrapper">
      <div className="porfolio-text">
        <h4>
          <center>PORTFOLIO</center>
        </h4>
        <p>
          We make bold design statements using unusual illustrations and photos
          along with genius color combinations to make your brand instantly
          recognizable.
        </p>
      </div>

      <center>
        <button className="button" onClick={handleGallery}>
          {galleryOpen ? "Close Gallery" : "Open Gallery"}
        </button>
      </center>
      {renderGallery()}
      <div className="slider">
        <AutoplaySlider
          play={true}
          animation="foldOutAnimation"
          cssModule={[CoreStyles, AnimationStyles]}
          cancelOnInteraction={false}
          interval={4000}
        >
          {renderSlider()}
        </AutoplaySlider>
      </div>
    </div>
  );
}

export default Portfolio;
