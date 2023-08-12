import React, { useState } from "react";
import { useGlobalContext } from "./Context";

const Final = () => {
  const { name, number, age } = useGlobalContext();

  return (
    <div className="final-container">
      <h2>Here are the details that you have entered</h2>
      <h4>
        {name.length > 0 ? (
          <span>
            Your name is:{" "}
            <h3 style={{ color: "green", display: "inline" }}>{name}</h3>
          </span>
        ) : (
          <span>
            Your name is:{" "}
            <h3 style={{ display: "inline", color: "red" }}>Not provided</h3>
          </span>
        )}
      </h4>
      <h4>
        {number.toString().length > 0 ? (
          <span>
            Your number is:{" "}
            <h3 style={{ color: "green", display: "inline" }}>{number}</h3>
          </span>
        ) : (
          <span>
            Your number is:{" "}
            <h3 style={{ display: "inline", color: "red" }}>Not provided</h3>
          </span>
        )}
      </h4>
      <h4>
        {age.toString().length > 0 ? (
          <span>
            Your age is:{" "}
            <h3 style={{ color: "green", display: "inline" }}>{age}</h3>
          </span>
        ) : (
          <span>
            Your age is:{" "}
            <h3 style={{ display: "inline", color: "red" }}>Not provided</h3>
          </span>
        )}
      </h4>
    </div>
  );
};

export default Final;
