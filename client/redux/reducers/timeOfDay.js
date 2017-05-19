const initialState = {
  time: "Приветствую"
};

export default function timeOfDayReduce(state = initialState, action) {
  switch (action.type) {
    case 'TIME_OF_DAY':
      return { ...state, time: action.payload };
    default:
      return state;
  }
}
