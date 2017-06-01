const initialState = {
  ttState: false
};

export default function tooltipReducer(state = initialState, action) {
  switch (action.type) {
    case 'TOOLTIP_STATE':
      return { ...state, ttState: !action.payload };
    default:
      return state;
  }
}
