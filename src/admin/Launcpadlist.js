import React, { useState } from "react";
import Card from "./Card";
import "./Launcpadlist.css";
import Data from "./data";

const Launcpadlist = () => {
  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(false);
  const [state3, setState3] = useState(false);
  const [state4, setState4] = useState(false);
  const [items, setItems] = useState(Data);

  const func = (number, word) => {
    if (number === "1") {
      setState1(true);
      setState2(false);
      setState3(false);
      setState4(false);
    } else if (number === "2") {
      setState1(false);
      setState2(true);
      setState3(false);
      setState4(false);
    } else if (number === "3") {
      setState1(false);
      setState2(false);
      setState3(true);
      setState4(false);
    } else {
      setState1(false);
      setState2(false);
      setState3(false);
      setState4(true);
    }

    const updatedItems = Data.filter((curElem) => {
      return curElem.category === word;
    });

    setItems(updatedItems);
  };

  return (
    <>
      <h1 className="launcpad_h1">Launchpad Projects</h1>
      <div className="launcpad_div1">
        <button
          onClick={() => func("1", "IN_PROGRESS")}
          className={state1 ? "launcpad_div_btn" : ""}
        >
          PRESALE LIVE
        </button>
        <button
          onClick={() => func("2", "UPCOMING")}
          className={state2 ? "launcpad_div_btn" : ""}
        >
          UPCOMING
        </button>
        <button
          onClick={() => func("3", "ENDED")}
          className={state3 ? "launcpad_div_btn" : ""}
        >
          PRESALE ENDED
        </button>
        <button
          onClick={() => func("4", "CANCELED")}
          className={state4 ? "launcpad_div_btn" : ""}
        >
          CANCELLED
        </button>
      </div>

      <div className="launcpad_div2">
        {items.map((ele) => {
          return <Card key={ele.id} obj={ele} />;
        })}
      </div>
    </>
  );
};

export default Launcpadlist;
