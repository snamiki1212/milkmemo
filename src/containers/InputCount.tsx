import React from 'react';
import { connect } from 'react-redux';
import { inputCount } from '../actions';
import Input from '../components/Input';

const mapStateToProps = (state: any) => ({
  value: state.inputCount,
  type: 'number',
})

const mapDispatchToProps = (dispatch: any) => ({
  handleChange: (count: number) => dispatch(inputCount(count)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Input);
