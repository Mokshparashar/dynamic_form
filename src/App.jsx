import { useState } from "react";
import "./App.css";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Final from "./Final";

function App() {
  const [isOneChecked, setIsOneChecked] = useState(false);
  const [isTwoChecked, setIsTwoChecked] = useState(false);

  const object = {
    isOneChecked,
    setIsOneChecked,
    isTwoChecked,
    setIsTwoChecked,
  };

  if (isOneChecked) {
    return <Form2 />;
  }

  if (isTwoChecked) {
    return <Final />;
  }

  return (
    <div className="form-container">
      <Form1 {...object} />
    </div>
  );
}

export default App;
