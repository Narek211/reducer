import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "../../components/Button";
import { plusAction, minusAction } from "../../redux/actions";

class ReduxCounter extends Component {
  constructor() {
    super();
    this.state = {
      inputColor: "",
    };
  }
  onChange = (e) => {
      const { dispatch } = this.props;
    dispatch({ type: 'Change_Color', inputColor: e.target.value });
    // this.setState({ inputColor: e.target.value });
  };
  render() {
    const { inputColor } = this.state;

    const { count, dispatch, color } = this.props;
    return (
      <div>
        <h1>ReduxCounter</h1>
        <Button
          onClick={() => {
            dispatch(plusAction);
          }}
        >
          +
        </Button>
        <Button
          onClick={() => {
            dispatch(minusAction);
          }}
        >
          -
        </Button>
        <Button>Change color</Button>
        <input onChange={this.onChange} type="color"></input>
        <h1 style={{ color }}>{count}</h1>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  count: store.counterReducer.count,
  color: store.colorReducer.color,
});

const mapDispatchToProps = (dispatch) => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(ReduxCounter);
