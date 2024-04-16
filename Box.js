import React from "react";

const Box = ({ box, index, handleClick, order }) => {
  return (
    <div
      className="box"
      style={{
        visibility: !box.isVisible ? "hidden" : "visible",
        backgroundColor: order.includes(index) ? "green" : "gray",
      }}
      onClick={() => {
        handleClick(index);
      }}
    ></div>
  );
};

export default Box;
