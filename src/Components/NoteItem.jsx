import React, { useEffect, useState } from "react";

import CardActions from "@material-ui/core/CardActions";

import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import Icon from "@material-ui/core/Icon";
import DeleteIcon from "@material-ui/icons/Delete";
const NoteItem = props => {
  console.log("noteItem", props);

  return (
    <>
      <Typography style={{ marginTop: 12 }} variant="h4" component="h2">
        {props.noteHeading}
      </Typography>
      <Typography
        style={{ marginBottom: 12 }}
        variant="h5"
        color="textSecondary"
      >
        {props.noteDate}
      </Typography>
      <Typography variant="body2" component="p">
        {props.noteContent}
        <br />
      </Typography>

      <CardActions>
        <Fab size="small" aria-label="delete">
          <DeleteIcon />
        </Fab>
        <Fab color="secondary" aria-label="edit" size="small">
          EDIT
        </Fab>
      </CardActions>
    </>
  );
};

export default NoteItem;
