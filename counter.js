import React from "react";
import { connect } from "react-redux";

class Counter extends React.Component {
  incriment = () => {
    this.props.dispatch({ type: "incriment" });
  };
  decrement = () => {
    if (this.props.count > 0) {
      this.props.dispatch({ type: "decrement" });
    }
  };
  render() {
    return (
      <div className="counter">
        <h2>counter</h2>
        <div>
          <button onClick={this.decrement}> &ndash; </button>
          <span className="count">{this.props.count}</span>
          <button onClick={this.incriment}>+</button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  count: state.count
});
export default connect(mapStateToProps)(Counter);
