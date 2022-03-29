import React from "react";
import "./Adminnav.css";
import logo from "./logo.jpg";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import Mobilenav from "./Mobilenav.js";
import { useLocation } from "react-router-dom";

const Adminnav = () => {
  let location = useLocation();

  const [open, setOpen] = React.useState(false);

  const toggle = () => {
    setOpen(true);
  };

  React.useEffect(() => {
    if (open === true) setOpen(false);

    return () => {};
  }, [location]);

  return (
    <>
      <div className="adminnav">
        {/*  */}

        <div>
          <div className="mobile" onClick={toggle}>
            <MenuIcon />
          </div>
          <img src={logo} alt="FinverseCapital" />
          <h4>Finverse Capital</h4>
        </div>

        <div>
          <button>
            <HelpOutlineOutlinedIcon />
            <span>No Network</span>
          </button>
          <button>
            <AddOutlinedIcon />
            <span>Connect</span>
          </button>
          <button className="walletbtn">Connect Wallet</button>
        </div>

        {/*  */}
      </div>

      {open ? <Mobilenav /> : ""}
    </>
  );
};

export default Adminnav;
