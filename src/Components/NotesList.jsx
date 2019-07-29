import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import NoteItem from "./NoteItem.jsx";

const NotesList = props => {
  const [notesList, setNotesList] = useState([]);

  useEffect(() => {
    if (props.allNotes !== undefined || null) {
      setNotesList([props.allNotes]);
    }
  }, [props.allNotes, setNotesList]);

  return (
    <>
      <Card
        style={{
          backgroundColor: "lightYellow",
          minWidth: 300,
          overFlow: "auto",
          maxHeight: "500px"
        }}
      >
        <CardContent>
          <Typography
            style={{ fontSize: 25 }}
            color="textSecondary"
            gutterBottom
          >
            NOTES APP
          </Typography>
          <CardActions>
            <Fab color="primary" size="small" aria-label="add">
              <AddIcon />
            </Fab>
          </CardActions>

          {Array.isArray(notesList[0]) &&
            notesList[0].map(item => {
              return (
                <NoteItem
                  key={item.id}
                  noteHeading={item.subject}
                  noteContent={item.content}
                  noteDate={item.createdAt}
                />
              );
            })}
        </CardContent>
      </Card>
    </>
  );
};

export default NotesList;
