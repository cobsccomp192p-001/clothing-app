import React from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";

const HatsPage = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Hats</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route  path="/hats" component={HatsPage} />
      </Switch>
      {/* <HomePage/> */}
    </div>
  );
}

export default App;
