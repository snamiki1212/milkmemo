import React from 'react';
import { connect } from 'react-redux';
import { inputCount } from '../actions';

const mapStateToProps = (state: any) => ({
  value: state.inputCount,
  type: 'number',
})

const mapDispatchToProps = (dispatch: any) => ({
  handleChange: (count: number) => dispatch(inputCount(count)),
})

const InputCount = ({ handleChange, value, type}: any) => {
  return(
    <input
      type={type}
      value={value}
      onChange={(event) => handleChange(event.target.value)}
    />
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InputCount);
