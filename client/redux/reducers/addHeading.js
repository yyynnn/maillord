const initialState = {
  time: "addHeading"
};

export default function addHeading(state = initialState, action) {
  switch (action.type) {
    case "ADD_HEADING":
      return { ...state, addHeading: action.payload };
    default:
      return state;
  }
}
