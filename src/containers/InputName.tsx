import React from 'react';
import { connect } from 'react-redux';
import { inputName } from '../actions';

const mapStateToProps = (state: any) => ({
  value: state.inputName,
  type: 'text',
})

const mapDispatchToProps = (dispatch: any) => ({
  handleChange: (name: string) => dispatch(inputName(name)),
})

const Input = ({ handleChange, value, type }: any) => {
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
)(Input);
