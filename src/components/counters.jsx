import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  render() {
    const { onReset, onDelete, onIncrement, onDecrement } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-info btn-sm m-2">
          Reset
        </button>
        <div className="now">
          {this.props.counters.map((c) => (
            <Counter
              key={c.id}
              onDelete={onDelete}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
              counter={c}
            >
              {/* <h4>{c.title}</h4> */}
            </Counter>
          ))}
        </div>
      </div>
    );
  }
}

export default Counters;
