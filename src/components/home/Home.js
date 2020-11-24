import React from "react";
import Background from "../../images/background.jpg";
import "./Home.styles.scss";
function Home() {
  return (
    <div
      className="home-wrapper"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="centered-text">
        <h1>IT ZALADGAN</h1>
        <h3>LOGO AND GRAPHIC DESIGNER</h3>
        <h5>TOP RATED DESIGNER ON TWO PRESTIGE PLATFORMS </h5>
        <h5>99designs and UpWork</h5>
      </div>
    </div>
  );
}

export default Home;
