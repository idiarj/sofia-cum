import React from "react";
import bouquet from "../assets/bouquet.png";

const FlowerBouquet = () => {
  return (
    <div style={{
      marginTop: "2rem",
      display: "flex",
      justifyContent: "center",
      animation: "fadeIn 2s ease-out forwards",
      opacity: 0
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
          @keyframes fadeIn {
            to {
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};

export default FlowerBouquet;