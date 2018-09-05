import React from 'react';

import { connect } from 'react-redux';

import { increment } from '../actions';


//NOTE: this CounterReduxExampleContainer based on this blog post: https://daveceddia.com/how-does-redux-work/

// const increaseCount = ({ dispatch }) => {
//   // let input
//   console.log('hello from increaseCount...')
// }

class CounterReduxExampleContainer extends React.Component {


  // increment = () => {
  //   console.warn('increment called!!!')
  //   // this.props.dispatch({ type: 'INCREMENT' });
  //   this.props.dispatch({ type: 'ADD_ONE' });
  // }

  increment = () => {
    console.warn('increment called!!!')
    this.props.dispatch( increment() ) //dispatching increment(), which returns a plain object from actions/index.js...
  }

  decrement = () => {
    console.warn('decrement called!!!')
    // this.props.dispatch({ type: 'DECREMENT' });
    this.props.dispatch({ type: 'SUBTRACT_ONE' });
  }

  render() {
    console.log('CounterReduxExampleContainer - this.props is: ', this.props)
    return (
      <div style={{background: 'pink'}}>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>
            -
          </button>

          <span style={{background: 'white'}}>
            {this.props.count}
          </span>

          <button onClick={this.increment}>
            +
          </button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log('mapStateToProps - state is: ', state)
  // console.log('mapStateToProps - state.reducerExample is: ', state.reducerExample)
  // console.log('mapStateToProps - state.reducerExample.count is: ', state.reducerExample.count)
  console.log('mapStateToProps - state.counter.count is: ', state.counter.count)
  return {
    // count: state.count
    // count: state.reducerExample.count
    count: state.counter.count
  };
}

export default connect(mapStateToProps)(CounterReduxExampleContainer);
