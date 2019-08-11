import React, { useEffect, useState } from "react";
import NoteItem from "./NoteItem.jsx";
import List from "@material-ui/core/List";

const NotesList = props => {
  const [notesList, setNotesList] = useState([]);
  useEffect(() => {
    if (props.allNotes !== undefined || null) {
      setNotesList([props.allNotes]);
    }
  }, [props.allNotes, setNotesList]);

  return (
    <>
      {Array.isArray(notesList[0]) &&
        notesList[0].map(item => {
          return (
            <>
              <NoteItem
                date={item.createdAt}
                header={item.subject}
                content={item.content}
              />
            </>
          );
        })}
    </>
  );
};

export default NotesList;
