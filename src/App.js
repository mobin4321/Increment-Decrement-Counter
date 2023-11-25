import React from "react";
import "./app.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";

const App = () => {
  const payload = 5;
  const myState = useSelector((state) => {
    return state.changeTheNumber;
  });
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h1>Increment/Decrement Counter</h1>
      <h4>using React and Redux</h4>
      <div className="quantity">
        <a
          style={{ cursor: "pointer" }}
          className="quantity__minus"
          title="Decrement"
          onClick={() => dispatch(decNumber(5))}
        >
          <span>-</span>
        </a>
        <input
          name="quantity"
          type="text"
          className="quantity__input"
          value={myState}
        />
        <a
          style={{ cursor: "pointer" }}
          className="quantity__plus"
          title="Increment"
          onClick={() => dispatch(incNumber(5))}
        >
          <span>+</span>
        </a>
      </div>
    </div>
  );
};

export default App;
