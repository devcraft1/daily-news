import React from "react";
import { Switch, Route, Router } from "../util/router.js";
import API from "../api/API";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={API} />
        <Route
          component={({ location }) => {
            return (
              <div
                style={{
                  padding: "50px",
                  width: "100%",
                  textAlign: "center"
                }}
              >
                <div style={{
                  padding: "150px",
                  width: "100%",
                  textAlign: "center"
                }}>Request <code>{location.pathname}</code> could not be found.</div>
              </div>
            );
          }}
        />
      </Switch>
    </Router>
  );
}

export default App;
