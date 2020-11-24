import React from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import "./Testemonials.styles.scss";

const testemoinals = [
  {
    title: "Brian Gillis",
    paragraph:
      ' "Igor is ALWAYS amazing! Such an incredible artist. Work with him! He will always make you happy. I\'ve worked with Igor for years and sent himmany clients because he is REALLY THAT GREAT! "',
  },

  {
    title: "Kristianne Foster",
    paragraph:
      '"Of all the designers we contacted, Zaladgan was the one who really grasped what we were trying to create. He was incredibly responsive and professional throughout our logo design process - I would absolutely recommend his services!"',
  },

  {
    title: "Jeffrey Dean",
    paragraph:
      '"Went above and beyond in creating, fine tuning, and delivering on our concept. Takes direction well, very quick turnaround, and honorable. I highly recommend and am very satisfied with our new logo!"',
  },

  {
    title: "Janssen K. Anna",
    paragraph:
      '"Zaladgan is an absolutely great designer! I love my logo and already started 2 more 1-1 projects and will work on other projects with him in the future. He was always nice and helpful. He worked very quickly and diligently."',
  },

  {
    title: "Chris Glyde",
    paragraph:
      '"Igor is always a pleasure to work with. Never have any problems with him and he always delivers exactly what I want, if not better. If you\'re looking for attention to detail and creativity, Igor has that in spades."',
  },

  {
    title: "Leagle.AI",
    paragraph:
      "\"Igor is a great and creative designer. He designed the logo for Leagle.AI. He is able to 'translate' key values in an appealing design. He was always open for suggestions. I'm looking forward to a long-term collaboration with Igor.\"",
  },
  {
    title: "Rochelleg",
    paragraph:
      '"Zaladgan not only provided a basic design, but also showed us how it could work on different media (i.e. signage, t-shirts). Provided all files requested in a timely fashion and was easy to deal with. Plus a great design."',
  },
];

function Testemonials() {
  const renderItems = () => {
    const Items = testemoinals.map((testemoinal, index) => {
      return (
        <div
          className={`carousel-item ${index === 0 ? "active" : ""}`}
          key={index}
        >
          <center>
            <div className="single-item">
              <h3>{testemoinal.title}</h3>
              <p>{testemoinal.paragraph}</p>
            </div>
          </center>
        </div>
      );
    });
    return <div className="carousel-inner">{Items}</div>;
  };
  return (
    <div className="testemonials-wrapper">
      <h4>
        <center>TESTIMONIALS</center>
      </h4>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        {renderItems()}
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default Testemonials;
