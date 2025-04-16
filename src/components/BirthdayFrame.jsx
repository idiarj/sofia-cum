import React, { useState } from "react";
import FlowerCanvas from "./FlowerCanvas";
import FlowerBouquet from "./FlowerBouquette";

import amiga1 from "../assets/photo_2025-04-16_16-47-55.jpg";
import amiga2 from "../assets/photo_2025-04-16_16-48-10.jpg";
import amiga3 from "../assets/photo_2025-04-16_16-48-22.jpg";
import amiga4 from "../assets/photo_2025-04-16_16-48-33.jpg";
import leclerc from "../assets/lecrerc.png";

const BirthdayFrame = () => {
  const [showFlowers, setShowFlowers] = useState(false);

  return (
    <div style={{
      border: "5px solid pink",
      borderRadius: "20px",
      padding: "2rem",
      background: "white",
      boxShadow: "0 0 10px pink",
      maxWidth: "800px",
      width: "100%",
    }}>
      <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", marginBottom: "1rem" }}>
        <img src={amiga1} alt="amiga1" style={{ width: "120px", borderRadius: "10px" }} />
        <h2 style={{ fontFamily: "cursive", fontSize: "2rem", color: "#d63384", textAlign: "center" }}>
          🎉 Feliz Cumpleaños Sofía 🎉
          <br />
          <span style={{ fontSize: "1.5rem", color: "#ff69b4" }}>Te quiero mucho</span>
        </h2>
        <img src={amiga2} alt="amiga2" style={{ width: "120px", borderRadius: "10px" }} />
      </div>
      <img src={leclerc} alt="leclerc" style={{ width: "200px", borderRadius: "10px", marginBottom: "1rem" }} />
      <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "1rem" }}>
        <img src={amiga3} alt="amiga3" style={{ width: "120px", borderRadius: "10px" }} />
        <img src={amiga4} alt="amiga4" style={{ width: "120px", borderRadius: "10px" }} />
      </div>
      <button onClick={() => setShowFlowers(true)} style={{ padding: "10px 20px", fontSize: "1rem", borderRadius: "10px", backgroundColor: "#ff69b4", color: "white", border: "none" }}>
        Dame click o lloro
      </button>
      {showFlowers && <FlowerBouquet />}
    </div>
  );
};

export default BirthdayFrame;