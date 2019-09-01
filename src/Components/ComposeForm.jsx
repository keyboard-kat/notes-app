import React, { useEffect, useState } from "react";

import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import SaveIcon from "@material-ui/icons/Save";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  }
}));

const ComposeForm = () => {
  const [formValues, setFormValues] = useState({
    subject: undefined,
    content: undefined,
    showButton: false
  });

  const [showButton, setShowButton] = useState(false);

  const handleChange = prop => event => {
    setFormValues({ ...formValues, [prop]: event.target.value });
    !showButton ? setShowButton(true) : setShowButton(false);
  };

  const handleSubmit = () => {
    debugger;
    console.log({ formValues });
  };
  const classes = useStyles();

  return (
    <>
      {" "}
      <div className={classes.root}>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            value={formValues.subject}
            label={moment(new Date()).format("dddd. MMM Do, YYYY, h:mm a")}
            onChange={handleChange("subject")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {showButton ? (
                    <IconButton
                      type="submit"
                      value="Submit"
                      size="small"
                      color="primary"
                    >
                      <SaveIcon />{" "}
                    </IconButton>
                  ) : (
                    <></>
                  )}
                </InputAdornment>
              )
            }}
          />
          <TextField
            multiline
            rows="10"
            fullWidth
            value={formValues.content}
            onChange={handleChange("content")}
          />
        </form>{" "}
      </div>
    </>
  );
};

export default ComposeForm;
