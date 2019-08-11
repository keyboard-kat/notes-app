import React from "react";
import NotesWrapper from "./NotesWrapper";

import { connect } from "react-redux";
import { getAllNotes } from "../Actions/NotesActions";

class LandingPage extends React.Component {
  componentDidMount() {
    this.props.getNotes();
  }
  render() {
    return (
      <>
        <NotesWrapper allNotes={this.props.notes} />
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
)(LandingPage);
