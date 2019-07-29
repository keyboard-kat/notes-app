import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import { connect } from "react-redux";
import { getAllNotes } from "./Actions/NotesActions";

class App extends Component {
  state = { isLocalSetUp: false, storeValue: "", nsKeys: [] };
  componentDidMount() {
    this.props.getNotes();

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

const mapDispatchToProps = dispatch => {
  return {
    getNotes: () => {
      debugger;
      dispatch(getAllNotes());
    }
  };
};

const mapStateToProps = state => {
  const { notes } = state.NotesReducer;
  return {
    notes
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
