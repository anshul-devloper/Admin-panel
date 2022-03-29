import React from "react";
import "./Card.css";

const Card = ({ obj }) => {
  return (
    <div className="card">
      <div className="card1">
        <img src={obj.image} alt="project" />
        <div>
          <ul>
            <li>{obj.category}</li>
            <li className="protocol">{obj.project}</li>
            <li>{obj.dollar}</li>
          </ul>
        </div>
      </div>
      <div className="card2">
        <p>
          <span>
            Soft/Hard cap <span> .................</span>
          </span>
          <span>
            {obj.soft}/{obj.hard}
          </span>
        </p>
        <p>
          <span>
            Min/Max <span> .................</span>
          </span>
          <span>
            {obj.min}/{obj.max}
          </span>
        </p>
        <p>
          <span>
            Liquidity <span> .................</span>
          </span>
          <span>{obj.liquidity}</span>
        </p>
        <p>
          <span>
            Lockup Time <span> .................</span>
          </span>
          <span>days</span>
        </p>
      </div>
      <div className="card3">
        <h4>Progress ({obj.Progress}%)</h4>
        <div className="card3_div1">
          <div style={{ width: `${obj.Progress}%` }}></div>
        </div>
        <div className="card3_div2">
          <span>0 BNB</span>
          <span>150 BNB</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
