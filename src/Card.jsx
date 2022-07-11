import React from "react";
import "./Style.css";

export default function Card(prope) {
  return (
    <div className="cardContainer">
      <a href={prope.links} target="blank">
      <img src={prope.imglink} alt="serier pic" className="cardImages" />
      </a>
      <div className="cardTextContainer">
        <p className="title">{prope.title}</p>
        <h3 className="cardName">{prope.Name}</h3>
      <a href={prope.links} target="blank">
          <button className="cardButton">watch now</button>
      </a>
      </div>
    </div>
  );
}
