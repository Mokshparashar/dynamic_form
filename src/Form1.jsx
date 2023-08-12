import "./css/Form1.css";
import React from "react";
import { useGlobalContext } from "./Context";

const Form1 = ({
  isOneChecked,
  setIsOneChecked,
  isTwoChecked,
  setIsTwoChecked,
}) => {
  const { name, setName, number, setNumber } = useGlobalContext();

  return (
    <div className="form1-container">
      <br />
      <input
        type="text"
        name=""
        id=""
        placeholder="your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="number"
        name=""
        id=""
        placeholder="Phone Number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />

      <div className="radio-input-box">
        <label
          htmlFor="radio2"
          style={{
            opacity:
              number.toString().length > 9 &&
              number.toString().length < 11 &&
              name.length > 0
                ? 1
                : 0.3,
            cursor:
              number.toString().length > 9 &&
              number.toString().length < 11 &&
              name.length > 0
                ? "pointer"
                : "not-allowed",
          }}
        >
          Submit
        </label>
        <input
          type="radio"
          name="radio1"
          id="radio2"
          onClick={() => setIsTwoChecked(true)}
          disabled={
            number.toString().length > 9 &&
            number.toString().length < 11 &&
            name.length > 0
              ? false
              : true
          }
        />
        <label
          htmlFor="radio1"
          style={{
            opacity:
              number.toString().length > 9 &&
              number.toString().length < 11 &&
              name.length > 0
                ? 1
                : 0.3,
            cursor:
              number.toString().length > 9 &&
              number.toString().length < 11 &&
              name.length > 0
                ? "pointer"
                : "not-allowed",
          }}
        >
          Next
        </label>
        <input
          type="radio"
          name="radio1"
          id="radio1"
          onClick={() => setIsOneChecked(true)}
          disabled={
            number.toString().length > 9 &&
            number.toString().length < 11 &&
            name.length > 0
              ? false
              : true
          }
        />
      </div>
    </div>
  );
};

export default Form1;
