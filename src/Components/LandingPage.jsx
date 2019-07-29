import React from "react";
import Notes from "./Notes.jsx";

class LandingPage extends React.Component {
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
          <Notes />
        </div>
      </>
    );
  }
}

export default LandingPage;
