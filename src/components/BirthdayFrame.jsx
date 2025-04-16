import React, { useState } from "react";
import './BirthdayFrame.css';

import FlowerBouquet from "./FlowerBouquette";

import amiga1 from "../assets/photo_2025-04-16_16-47-55.jpg";
import amiga2 from "../assets/photo_2025-04-16_16-48-10.jpg";
import amiga3 from "../assets/photo_2025-04-16_16-48-22.jpg";
import amiga4 from "../assets/photo_2025-04-16_16-48-33.jpg";
import leclerc from "../assets/lecrerc.png";

const BirthdayFrame = () => {
  const [showFlowers, setShowFlowers] = useState(false);
  const [clicked, setClicked] = useState(false);


  return (
    <div className="birthday-frame-wrapper">
      <div className="birthday-frame">
  <div className="birthday-header">
    <img src={amiga1} alt="amiga1" className="birthday-img" />
    <h2 style={{ fontFamily: "cursive", fontSize: "2rem", color: "#d63384", textAlign: "center" }}>
  🎉 Feliz Cumpleaños Sofía 🎉
  <br />
  <span style={{ fontSize: "1.5rem", color: "#ff69b4" }}>Te quiero mucho</span>
</h2>
    <img src={amiga2} alt="amiga2" className="birthday-img" />
  </div>
  <img src={leclerc} alt="leclerc" className="birthday-img-center" />
  <div className="birthday-bottom">
    <img src={amiga3} alt="amiga3" className="birthday-img" />
    <img src={amiga4} alt="amiga4" className="birthday-img" />
  </div>
  <button
  onClick={() => {
    setShowFlowers(true);
    setClicked(true);
    setTimeout(() => setClicked(false), 800); // reset efecto
  }}
  className={`birthday-button ${clicked ? "clicked" : ""}`}
>
  Dame click o lloro
</button>
  {showFlowers && <FlowerBouquet/>}
</div>

    </div>
  );
};

export default BirthdayFrame;