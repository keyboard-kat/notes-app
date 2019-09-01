import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
// import Container from "@material-ui/core/Container";

import EditIcon from "@material-ui/icons/Edit";

import Grid from "@material-ui/core/Grid";
import NoteItem from "./NoteItem.jsx";
import ComposeForm from "./ComposeForm";
import List from "@material-ui/core/List";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ListItem from "@material-ui/core/ListItem";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
import NotesList from "./NotesList.jsx";
import { Divider } from "material-ui";
const useStyles = makeStyles(theme => ({
  root: {
    width: "170%"
  }
}));
const NotesWrapper = props => {
  const classes = useStyles();
  const today = moment(new Date()).format("dddd. MMM Do, YYYY, h:mm a");
  return (
    <>
      <Card
        style={{
          margin: "auto",
          marginTop: "200px",
          height: "70vh",
          width: "60vh",
          overflow: "auto",
          backgroundColor: "rgba(0, 0, 0, 0.09)"
        }}
      >
        <Grid container justify="center" alignItems="center">
          <Grid item xs={8}>
            <ExpansionPanel defaultExpanded={true}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color="textSecondary" variant="h2">
                  compose
                  <EditIcon />
                </Typography>
              </ExpansionPanelSummary>

              <ExpansionPanelDetails>
                <List className={classes.root}>
                  <ComposeForm />
                </List>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color="textSecondary" variant="h2">
                  notes
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <List className={classes.root}>
                  <NotesList allNotes={props.allNotes} />
                </List>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Grid>
        </Grid>{" "}
      </Card>
    </>
  );
};

export default NotesWrapper;
