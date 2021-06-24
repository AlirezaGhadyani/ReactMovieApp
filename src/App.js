import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";
import Navbar from './Components/Navbar'
import HomePage from "./Components/Home page/HomePage";
import WatchListPage from "./Components/WatchList Page/WatchListPage";
import WatchedPage from './Components/Watched Page/WatchedPage'

function App() {
  return (
    <GlobalProvider>
      <Router>
        <div className="container">
          <Navbar />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/watchlist" component={WatchListPage} />
            <Route path="/watched" component={WatchedPage} />
          </Switch>
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
