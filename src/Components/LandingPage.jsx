import React from "react";
import NotesList from "./NotesList.jsx";
import { connect } from "react-redux";
import { getAllNotes } from "../Actions/NotesActions";

class LandingPage extends React.Component {
  componentDidMount() {
    this.props.getNotes();
  }
  render() {
    return (
      <>
        <div
          style={{
            margin: "auto",
            marginTop: "200px",
            width: "400px",
            maxHeight: "400px",
            background: "white",
            borderRadius: 25
          }}
        >
          <NotesList allNotes={this.props.notes} />
        </div>
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
