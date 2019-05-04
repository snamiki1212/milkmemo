import React from 'react';
import { connect } from 'react-redux';
import { inputCount } from '../actions';

const mapStateToProps = (state:any) => ({
  count: state.inputCount
})

const mapDispatchToProps = (dispatch: any) => ({
  inputCount: (count:number) => dispatch(inputCount(count)),
})

const InputCount = ({ inputCount, count }:any) => {
  return(
    <input
      type='number'
      value={count}
      onChange={(event) => inputCount(event.target.value)}
    />
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InputCount);