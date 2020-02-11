import React from "react";
import Section from "./envAndResiv/Section";
import "./Page1.css";

function Page1(props) {
  return (
    <Section color={props.color} size={props.size}>
      {/* <div className="FooterComponent__container container">
        <img className="len" src="./image/pics/gacsUi.jpg" alt="loading pic" />
      </div> */}
      <div class="columns is-mobile">
        <div className="slide-container">
          <span id="slider-image-1"></span>
          <span id="slider-image-2"></span>
          <span id="slider-image-3"></span>
          <div className="image-container">
            <img src="./image/pics/5.jpg" className="slider-image" alt="pics" />
            <img src="./image/pics/2.jpg" className="slider-image" alt="pics" />
            <img src="./image/pics/3.jpg" className="slider-image" alt="pics" />
          </div>
          <div className="button-container">
            <a href="#slider-image-1" className="slider-button"></a>
            <a href="#slider-image-2" className="slider-button"></a>
            <a href="#slider-image-3" className="slider-button"></a>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Page1;
