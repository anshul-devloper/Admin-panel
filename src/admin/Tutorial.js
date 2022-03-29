import React from "react";
import "./Tutorial.css";

const Tutorial = () => {
  return (
    <>
      <h1 className="guide">Guides</h1>
      <div className="o-video">
        <iframe
          className="responsive-iframe"
          width="100%"
          height="450"
          src="https://www.youtube.com/embed/81RgfQc-uBo?autoplay=1&mute=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default Tutorial;
