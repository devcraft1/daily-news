import React from "react";
import Section from "./envAndResiv/Section";
import "./Page1.scss";

function Page1(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="FooterComponent__container container">
        <img className="len" src="./image/pics/gacsUi.jpg" alt="loading pic" />
      </div>
    </Section>
  );
}

export default Page1;
