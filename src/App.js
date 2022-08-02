import "./App.css";
import { useState } from "react";

function App() {
  const [state, setstate] = useState("red");
  const [checked, setcheck] = useState(true);

  const setBtnColor = () => {
    let color = state == "red" ? "blue" : "red";
    setstate(color);
    setcheck(!checked);
  };

  return (
    <div className="App">
      <div>
        <button
          style={{ backgroundColor: state }}
          onClick={(e) => {
            e.preventDefault();
            setBtnColor();
          }}
        >
          Color will be {state}
        </button>

        <input
          type={"checkbox"}
          id="html-check"
          data-testid="html-check"
          defaultChecked={checked}
          onClick={(e) => {
            setBtnColor();
          }}
        />

        <label htmlFor="html-check">Click me</label>
      </div>
    </div>
  );
}

export default App;
