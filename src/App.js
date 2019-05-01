import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Repos from "./components/repos";

function App() {
  return (
    <div className="app">
      <Router>
        <Route path="/" component={Repos} />
      </Router>
    </div>
  );
}

export default App;
