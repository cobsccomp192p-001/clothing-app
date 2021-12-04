import React from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SigninAndSignupPage from "./pages/signin-and-signup/signin-and-signup.component";



function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route  path="/shop" component={ShopPage} />
        <Route  path="/signin" component={SigninAndSignupPage} />
      </Switch>
      {/* <HomePage/> */}
    </div>
  );
}

export default App;
