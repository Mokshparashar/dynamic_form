// import "./css/Form1.css";
import { useState } from "react";
import { useGlobalContext } from "./Context";
import Final from "./Final";

const Form2 = () => {
  const { age, setAge } = useGlobalContext();

  const [ageState, setAgeState] = useState(false);
  const [showfinal, setShowFinal] = useState(false);
  if (showfinal) {
    return <Final />;
  }
  return (
    <div className="Form2-container">
      <h3>Do you want to give us your age details:</h3>
      <input
        type="radio"
        name="form1radio"
        id="form2-radio-1"
        onClick={() => setAgeState(true)}
      />
      <label
        className="label-1"
        htmlFor="form2-radio-1"
        style={{ color: "white", background: ageState ? "green" : "none" }}
      >
        Yes
      </label>
      <input
        type="radio"
        name="form1radio"
        id="form2-radio-2"
        onClick={() => setAgeState(false)}
      />
      <label
        className="label-2"
        htmlFor="form2-radio-2"
        style={{ color: "white", background: ageState ? "none" : "green" }}
      >
        No
      </label>
      {ageState && (
        <input
          type="number"
          name=""
          id="age"
          style={{ display: "block" }}
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder='Enter your age'
        />
      )}
      <button className="btn" onClick={() => setShowFinal(true)}>
        Submit
      </button>
    </div>
  );
};

export default Form2;
