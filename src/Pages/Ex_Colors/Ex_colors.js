import React, { useState } from "react";
import { colors } from "../../utils/utils";

export default function Ex_colors() {
  const [color, setColor] = useState(colors[0]);
  const renderButtonColors = () => {
    return colors.map((color) => {
      return (
        <button
          onClick={() => {
            handleSetColor(color);
          }}
          className="btn"
          style={{ backgroundColor: color }}
        >
          {color}
        </button>
      );
    });
  };
  const handleSetColor = (value) => {
    setColor(value);
  };
  return (
    <div className="container row py-5">
      <div className="col-6">{renderButtonColors()}</div>
      <div
        className="col-6"
        style={{ backgroundColor: color, aspectRatio: "1/1" }}
      ></div>
    </div>
  );
}
