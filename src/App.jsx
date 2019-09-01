import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { getAllNotes } from "./Actions/NotesActions";
import { connect } from "react-redux";
import NotesWrapper from "./Components/NotesWrapper";

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
            <Route
              path="/"
              component={() => <NotesWrapper allNotes={this.props.notes} />}
            />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getNotes: () => {
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
