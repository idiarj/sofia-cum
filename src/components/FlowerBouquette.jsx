import React from "react";
import bouquet from "../assets/bouquet.png";

const FlowerBouquet = () => {
  return (
    <div style={{
      marginTop: "2rem",
      display: "flex",
      justifyContent: "center",
      opacity: 0,
      transform: "scale(0.9)",
      filter: "blur(10px)",
      animation: "fadeBlurIn 2s ease-out forwards"
    }}>
      <img
        src={bouquet}
        alt="Bouquet de flores"
        style={{
          width: "300px",
          maxWidth: "90%",
          borderRadius: "20px",
          boxShadow: "0 0 15px rgba(0,0,0,0.2)"
        }}
      />
      <style>
        {`
          @keyframes fadeBlurIn {
            0% {
              opacity: 0;
              transform: scale(0.9);
              filter: blur(20px);
            }
            100% {
              opacity: 1;
              transform: scale(1);
              filter: blur(0px);
            }
          }
        `}
      </style>
    </div>
  );
};

export default FlowerBouquet;