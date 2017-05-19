const initialState = {
  locale: "Ru"
};

export default function localeChangeReduce(state = initialState, action) {
  switch (action.type) {
    case "LOCALE_CHANGE":
      return { ...state, locale: action.payload };

    default:
      return state;
  }
}
