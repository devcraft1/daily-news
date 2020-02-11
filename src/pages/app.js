import React from "react";
import MainPage from "./main";
import { Switch, Route, Router } from "../util/router.js";
import AboutPage from "../component/AboutPage";
import API from "../api/API";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/news" component={API} />
        <Route exact path="/gallary" component={MainPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/" component={MainPage} />
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
                The page <code>{location.pathname}</code> could not be found.
              </div>
            );
          }}
        />
      </Switch>
    </Router>
  );
}

export default App;
