const initialState = {
  notes: undefined
};

export default function NotesReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_ALL_NOTES_SUECCESS":
      return {
        ...state,
        notes: action.notes[0]
      };

    case "GET_ALL_NOTES_ERROR":
      return {
        ...state,
        notes: undefined
      };

    default:
      return state;
  }
}
