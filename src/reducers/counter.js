//NOTE: the cases below are referencing actions in actions/index.js...

const initialState = {
  name: "Batman",
  count: 666
};

// const counter = (state = [], action) => {
const counter = (state = initialState, action) => {
  console.log('reducerExample - state is: ', state)
  console.log('reducerExample - action is: ', action)
  switch(action.type) {
    case 'ADD_ONE':
    return {
      ...state,
      count: state.count + 1
    }
    case 'SUBTRACT_ONE':
    return {
      ...state,
      count: state.count - 1
    }
    default:
    return state;
  }
}

export default counter;
