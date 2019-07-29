import Axios from "axios";

export const getAllNotesSucc = response => ({
  type: "GET_ALL_NOTES_SUECCESS",
  response
});

export const getAllNotesErr = error => ({
  type: "GET_ALL_NOTES_ERROR",
  error
});

export function getAllNotes() {
  return dispatch => {
    Axios.get("http://5d3a35c0fa091c001447084f.mockapi.io/api/notes")
      .then(res => dispatch(getAllNotesSucc(res.data)))
      .catch(err => dispatch(getAllNotesErr(err)));
  };
}
