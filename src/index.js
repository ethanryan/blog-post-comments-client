import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

// import App from './App';
import CounterReduxExampleContainer from './container/CounterReduxExampleContainer';

const store = createStore(rootReducer)

console.log('store is: ', store)

//NOTE: below logging is from: https://redux.js.org/advanced/middleware#attempt-3-monkeypatching-dispatch
//above page ultimately lists better ways to log as well
const next = store.dispatch
store.dispatch = function dispatchAndLog(action) {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

ReactDOM.render(
  <Provider store={store}>

    <CounterReduxExampleContainer />

    {/* <App /> */}

  </Provider>,
  document.getElementById('root')
);
