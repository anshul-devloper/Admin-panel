import React from "react";
import Sidebar from "./Sidebar.js";
import Adminnav from "./Adminnav.js";
import "./dashboard.css";
import { Route, Switch } from "react-router-dom";
import Launcpadlist from "./Launcpadlist.js";
import Createtoken from "./Createtoken.js";
import Home from "./Home.js";
import Createtokenlock from "./Createtokenlock.js";
import Createliquiditylock from "./Createliquiditylock.js";
import Audit from "./Audit.js";
import Auditprocess from "./Auditprocess.js";
import Tutorial from "./Tutorial.js";

const Dashboard = () => {
  return (
    <>
      <Adminnav />
      <div className="dashboard">
        <Sidebar />
        <div className="dashboardContainer">
          {/*  */}
          <Switch>
            <Route exact path="/admin/dashboard" component={Home} />
            <Route exact path="/admin/launchpadList" component={Launcpadlist} />
            <Route exact path="/admin/createtoken" component={Createtoken} />
            <Route
              exact
              path="/admin/createtokenlock"
              component={Createtokenlock}
            />
            <Route
              exact
              path="/admin/createliquiditylock"
              component={Createliquiditylock}
            />
            <Route exact path="/admin/audit" component={Audit} />
            <Route exact path="/admin/audit-process" component={Auditprocess} />
            <Route exact path="/admin/tutorial" component={Tutorial} />
          </Switch>
          {/*  */}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
