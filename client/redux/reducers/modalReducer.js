const initialState = {
  modalState: false,
  modalFirstTime: true
};

export default function modalReducer(state = initialState, action) {
  switch (action.type) {
    case 'MODAL_STATE':
      return { ...state, modalState: !action.payload };
    case 'MODAL_FIRST_TIME':
      return { ...state, modalFirstTime: action.payload };
    default:
      return state;
  }
}
