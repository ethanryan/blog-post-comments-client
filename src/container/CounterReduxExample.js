import React from 'react';

import { connect } from 'react-redux';

//NOTE: this CounterReduxExample based on this blog post: https://daveceddia.com/how-does-redux-work/

class CounterReduxExample extends React.Component {

  increment = () => {
    // this.props.dispatch({ type: 'INCREMENT' });
    this.props.dispatch({ type: 'ADD_ONE' });
  }

  decrement = () => {
    // this.props.dispatch({ type: 'DECREMENT' });
    this.props.dispatch({ type: 'SUBTRACT_ONE' });
  }

  render() {
    console.log('CounterReduxExample - this.props is: ', this.props)
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
  console.log('mapStateToProps - state.reducerExample is: ', state.reducerExample)
  console.log('mapStateToProps - state.reducerExample.count is: ', state.reducerExample.count)
  // console.log('mapStateToProps - state.counter.count is: ', state.counter.count)
  return {
    // count: state.count
    // count: state.reducerExample.count
    count: state.counter.count
  };
}

export default connect(mapStateToProps)(CounterReduxExample);
