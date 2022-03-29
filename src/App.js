import React from "react";
import Dashboard from "./admin/Dashboard.js";
import Admin from "./admin/Admin.js";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Admin} />
          <Route exact path="/admin/dashboard" component={Dashboard} />
          <Route exact path="/admin/launchpadList" component={Dashboard} />
          <Route exact path="/admin/createtoken" component={Dashboard} />
          <Route exact path="/admin/createtokenlock" component={Dashboard} />
          <Route
            exact
            path="/admin/createliquiditylock"
            component={Dashboard}
          />
          <Route exact path="/admin/audit" component={Dashboard} />
          <Route exact path="/admin/audit-process" component={Dashboard} />
          <Route exact path="/admin/tutorial" component={Dashboard} />
          <Route exact path="/admin/product" component={Dashboard} />
          <Route exact path="/admin/tokenlock" component={Dashboard} />
          <Route exact path="/admin/docs" component={Dashboard} />
          <Route exact path="/admin/liquiditylock" component={Dashboard} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
