import React, { useState } from "react";
import "./Createtokenlock.css";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";

////////////////////////////////////////////////
const Createtokenlock = () => {
  ///////////////////////////////////////////////

  const [user, setUser] = useState({
    address: "",
    amount: "",
    value: "",
    days: "",
    first: "",
    cycle: "",
  });

  const [check, setCheck] = React.useState(false);

  const { address, amount, value, days, first, cycle } = user;

  const registerDataChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleChange = (newValue) => {
    setUser({ ...user, value: newValue });
  };

  //  sumbit function
  const registerSubmit = (e) => {
    e.preventDefault();
    console.log(user);

    ///////// no function for now
  };

  const checkfunc = () => {
    //  toggle checkbox
    setCheck(!check);
  };

  //

  return (
    <>
      <h1 className="token_h1">Create Token Lock</h1>
      <div className="token_div">
        {/*  */}
        <form
          className="tokenForm"
          encType="multipart/form-data"
          onSubmit={registerSubmit}
        >
          <div>
            <h4>Token or LP Token address</h4>
            <input
              type="text"
              placeholder="Enter Token or LP Token Address."
              required
              name="address"
              value={address}
              onChange={registerDataChange}
            />
          </div>
          <div>
            <h4>Amount</h4>
            <input
              type="text"
              placeholder="Enter amount."
              required
              name="amount"
              value={amount}
              onChange={registerDataChange}
            />
          </div>
          <div>
            <h4>Lock until (UTC time)</h4>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack spacing={3}>
                <DateTimePicker
                  disablePast
                  label=""
                  value={value}
                  onChange={handleChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
            </LocalizationProvider>
          </div>
          <div className="info">
            Lock must be set at least 30 minutes from now
          </div>

          <div className="check_div">
            <input type="checkbox" onChange={checkfunc}></input>
            <span>Vesting Locker?</span>
          </div>

          {check ? (
            <>
              <div>
                <h4>Cycle (days)</h4>
                <input
                  type="text"
                  placeholder="Days to wait between one claim and the other."
                  required
                  name="days"
                  value={days}
                  onChange={registerDataChange}
                />
              </div>
              <div>
                <h4>First Percentage (%)</h4>
                <input
                  type="text"
                  placeholder="Ex - 40%."
                  required
                  name="first"
                  value={first}
                  onChange={registerDataChange}
                />
              </div>
              <div>
                <h4>Tokens Per Cycle Percentage (%)</h4>
                <input
                  type="text"
                  placeholder="Ex - 40%."
                  required
                  name="cycle"
                  value={cycle}
                  onChange={registerDataChange}
                />
              </div>{" "}
            </>
          ) : (
            ""
          )}

          {/*  */}
          <div className="fee">You will pay : 0 BNB</div>
          <input type="submit" value="Create Token" className="tokenBtn" />
        </form>
        {/*  */}
      </div>
    </>
  );
};

export default Createtokenlock;
