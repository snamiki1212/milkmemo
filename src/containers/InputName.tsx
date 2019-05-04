import React from 'react';
import { connect } from 'react-redux';
import { inputName } from '../actions';
import Input from '../components/Input';

const mapStateToProps = (state: any) => ({
  value: state.inputName,
  type: 'text',
})

const mapDispatchToProps = (dispatch: any) => ({
  handleChange: (name: string) => dispatch(inputName(name)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Input);
