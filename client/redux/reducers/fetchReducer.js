const initialState = {
  reqState: 'idle'
};

export default function formsReducer(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_DATA':
      return { ...state, reqState: 'pending' };
    case 'REQUEST_DATA_YES':
      return { ...state, reqState: 'finished' };
    case 'REQUEST_DATA_NO':
      return { ...state, reqState: 'error' };
    default:
      return state;
  }
}
