import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./Components/LandingPage";

class App extends Component {
  state = { isLocalSetUp: false, storeValue: "", nsKeys: [] };
  componentDidMount() {
    let isLocalSetUp = false;
    let storeValue = localStorage.getItem("debug");
    let nsKeys = [];
    if (storeValue) {
      isLocalSetUp = true;
      nsKeys = storeValue.split(",");
    }

    this.setState({ isLocalSetUp, storeValue, nsKeys });
  }
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={() => <LandingPage />} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
