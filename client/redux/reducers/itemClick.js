const initialState = {
  color: {
    colorLine: { r: 0.27, g: 0.02, b: 0.04 },
    colorBackground: { r: 0, g: 0.02, b: 0.06 },
    menuToggle: false
  }
};

export default function itemClickReduce(state = initialState, action) {
  switch (action.type) {
    case 'ITEM_CLICK':
      return { ...state, color: action.payload };

    default:
      return state;
  }
}
