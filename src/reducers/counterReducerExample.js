const initialState = {
  count: 42
};

function counterReducerExample(state = initialState, action) {
  console.log('counterReducerExample - state is: ', state)
  console.log('counterReducerExample - action is: ', action)
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

export default counterReducerExample;
