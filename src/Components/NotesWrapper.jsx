import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
// import Container from "@material-ui/core/Container";
// import Divider from "@material-ui/core/Divider";

import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import NotesList from "./NotesList";
import NoteTextArea from "./NoteTextArea";
import CardHeader from "@material-ui/core/CardHeader";

const NotesWrapper = props => {
  return (
    <>
      <Card
        style={{
          margin: "auto",
          marginTop: "200px",
          width: "70vh",
          background: "white"
        }}
      >
        <Grid style={{ padding: 20 }} container spacing={2}>
          <Grid xs={12} sm={6}>
            <NoteTextArea />
          </Grid>

          <Grid xs={12} sm={6}>
            <NotesList allNotes={props.allNotes} />
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default NotesWrapper;
