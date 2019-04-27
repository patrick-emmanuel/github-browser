import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserRepo from "./components/UserRepo";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={UserRepo} />
      </Switch>
    </Router>
  );
}

export default App;
