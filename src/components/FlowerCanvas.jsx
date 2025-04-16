import React from "react";

const flowers = ["🌷", "🌸", "🌼", "🌹", "🌻", "🌺"];

const FlowerCanvas = () => {
  return (
    <div style={{
      marginTop: "2rem",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      maxWidth: "500px",
      marginLeft: "auto",
      marginRight: "auto",
      gap: "0.3rem",
    }}>
      {Array.from({ length: 36 }).map((_, i) => {
        const flower = flowers[i % flowers.length];
        const rotation = Math.floor(Math.random() * 40) - 20; // -20° a +20°
        return (
          <span
            key={i}
            style={{
              fontSize: "2.5rem",
              transform: `rotate(${rotation}deg)`,
              display: "inline-block",
              animation: "bloom 1s ease-in-out forwards",
              animationDelay: `${i * 0.05}s`,
              opacity: 0,
            }}
          >
            {flower}
          </span>
        );
      })}
      <style>
        {`
          @keyframes bloom {
            0% { transform: scale(0.5) rotate(0deg); opacity: 0; }
            100% { transform: scale(1) rotate(1turn); opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

export default FlowerCanvas;
