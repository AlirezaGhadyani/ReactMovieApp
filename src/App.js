import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";
import Navbar from './Components/Navbar'
import HomePage from "./Components/Home page/HomePage";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <div className="container">
          <Navbar />
          <Switch>
            <Route path="/" exact component={HomePage} />
          </Switch>
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
