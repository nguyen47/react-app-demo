import React, { Component } from 'react';

class Counter extends Component {
  render() {
    return (
      <div className="row">
        {/* {this.props.children} */}
        <div className="col-sm">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col-sm">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-primary btn-sm m-2"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            // className={this.getDisableBtn()}
            className="btn btn-primary btn-sm"
            disabled={this.props.counter.value === 0 ? 'disabled' : ''}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }

  // getDisableBtn() {
  //   let classes = 'btn btn-primary btn-sm ';
  //   classes += this.props.counter.value === 0 ? 'disabled' : 'primary';
  //   return classes;
  // }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.props.counter.value === 0 ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? 'Zero' : value;
  }
}

export default Counter;
