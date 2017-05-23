const initialState = {
  forms: [
    {
      heading: '',
      mainText: '',
      image: ''
    }
  ]
};

export default function formsReducer(state = initialState, action) {
  switch (action.type) {
    case 'REMOVE_BLOCK':
      let rresult = state.forms.filter((_, i) => i !== action.payload);
      return { forms: rresult };
    case 'ADD_BLOCK':
      return { ...state, forms: [...state.forms, action.payload] };
    case 'ADD_TEXT':
      let result = state.forms;
      result[action.payload.id][action.payload.name] = action.payload.value;
      return { ...state, forms: result };
    case 'ADD_HEADING':
      return {
        ...state,
        ['form' + action.payload.id]: {
          heading: action.payload.heading,
          mainText: action.payload.mainText
        }
      };
    default:
      return state;
  }
}
