import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";

import InputAdornment from "@material-ui/core/InputAdornment";
import DeleteIcon from "@material-ui/icons/Delete";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const NoteTextArea = () => {
  const [header, setHeader] = useState(null);
  const [content, setContent] = useState(null);
  const [showButton, setShowButton] = useState(false);

  const handleChangeHeader = e => {
    setHeader(e.target.value);
  };

  const handleChangeContent = e => {
    setContent(e.target.value);
    !showButton ? setShowButton(true) : setShowButton(false);
  };

  return (
    <>
      <ListItem
        button
        style={{
          borderTopLeftRadius: "4px",
          borderTopRightRadius: "4px",
          backgroundColor: "rgba(0, 0, 0, 0.09)",
          minWidth: "95%",
          maxHeight: "350px"
        }}
      >
        <ListItemText
          primary={
            <TextField
              fullWidth
              value={header}
              label={""}
              onChange={handleChangeHeader}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {showButton ? <IconButton>SAVE </IconButton> : <></>}
                  </InputAdornment>
                )
              }}
            />
          }
        />
      </ListItem>

      <TextField
        multiline
        fullWidth
        rows="10"
        value={content}
        onChange={handleChangeContent}
      />
    </>
  );
};

export default NoteTextArea;
