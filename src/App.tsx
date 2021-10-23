import React from "react"
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Home from "./Home";
import SearchPage from "./pages/searchpage/SearchPage";

function App() {
  return (
    <div className="App hover:border-20">
      <Router>
        <Switch>
          <Route path="/search">
            <SearchPage/>
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
