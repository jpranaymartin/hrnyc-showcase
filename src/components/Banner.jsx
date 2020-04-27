import React from "react";

const Banner = () => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: "linear-gradient(275.44deg, #5CA5EF -22.86%, #2D2B2C 60.06%)"
      }}
    >
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1
            className="title"
            style={{
              color: "white",
              fontFamily: " 'Merriweather', serif",
              fontWeight: "100"
            }}
          >
            HRNYC MVP Showcase!
          </h1>
          <h2
            className="subtitle"
            style={{
              color: "white",
              fontFamily: "'Source Sans Pro', sans-serif",
              fontWeight: "100",
              width:"50%",
              marginLeft:"25%"
            }}
          >
            A collection of all the MVP projects that our students have completed during
            their time here at Hack Reactor! Click on a project card to see the details
            about the individual project and explore their work!
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Banner;
