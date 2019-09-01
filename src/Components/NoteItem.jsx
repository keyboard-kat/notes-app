import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import DeleteIcon from "@material-ui/icons/Delete";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import SaveIcon from "@material-ui/icons/Save";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  }
}));

const NoteItem = props => {
  const [header, setHeader] = useState(props.header);
  const [content, setContent] = useState(props.content);
  const [date, setDate] = useState(props.date);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    !open ? setOpen(true) : setOpen(false);
  };

  const handleChangeHeader = e => {
    setHeader(e.target.value);
  };

  const handleChangeContent = e => {
    setContent(e.target.value);
  };
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <form>
          <TextField
            fullWidth
            label={date}
            value={header}
            onChange={handleChangeHeader}
            onClick={handleClickOpen}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {(open && handleChangeHeader) ||
                  (open && handleChangeContent) ? (
                    <IconButton size="small" color="primary">
                      <SaveIcon />{" "}
                    </IconButton>
                  ) : null}

                  <IconButton size="small" color="secondary">
                    <DeleteIcon />{" "}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />

          <Collapse in={open} timeout="auto" unmountOnExit>
            <TextField
              multiline
              fullWidth
              value={content}
              onChange={handleChangeContent}
            />
          </Collapse>
        </form>
      </div>
    </>
  );
};

export default NoteItem;
