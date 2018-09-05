const initialState = {
  count: 42
};

function reducer(state = initialState, action) {
  console.log('reducerExample - state is: ', state)
  console.log('reducerExample - action is: ', action)
  switch(action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
}

export default reducer;
