import React, { useState } from "react";
import "./Createtoken.css";

////////////////////////////////////////////////
const Createtoken = () => {
  ///////////////////////////////////////////////
  const [user, setUser] = useState({
    type: "",
    name: "",
    symbol: "",
    decimal: "",
    supply: "",
  });

  const { type, name, symbol, decimal, supply } = user;

  const registerDataChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const registerSubmit = (e) => {
    e.preventDefault();

    ///////// nothing for now
  };

  return (
    <>
      <h1 className="token_h1">Create Token</h1>
      <div className="token_div">
        {/*  */}
        <form
          className="tokenForm"
          encType="multipart/form-data"
          onSubmit={registerSubmit}
        >
          <div>
            <h4>Token Type</h4>
            <input
              type="text"
              placeholder="Give Token Type."
              required
              name="type"
              value={type}
              onChange={registerDataChange}
            />
          </div>
          <div>
            <h4>Name</h4>
            <input
              type="text"
              placeholder="Give Your Token a Name."
              required
              name="name"
              value={name}
              onChange={registerDataChange}
            />
          </div>
          <div>
            <h4>Symbol</h4>
            <input
              type="text"
              placeholder="Choose a Symbol For Your Token."
              required
              name="symbol"
              value={symbol}
              onChange={registerDataChange}
            />
          </div>
          <div>
            <h4>Decimals</h4>
            <input
              type="text"
              placeholder="How Many Decimals?."
              required
              name="decimal"
              value={decimal}
              onChange={registerDataChange}
            />
          </div>
          <div>
            <h4>Total Supply</h4>
            <input
              type="text"
              placeholder="This Is Your Total Supply Of Token."
              required
              name="supply"
              value={supply}
              onChange={registerDataChange}
            />
          </div>
          <div className="fee">Current Fee: 0.2 BNB</div>
          <input type="submit" value="Create Token" className="tokenBtn" />
        </form>
        {/*  */}
      </div>
    </>
  );
};

export default Createtoken;
