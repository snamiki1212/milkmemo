import React from 'react';
import { connect } from 'react-redux';
import { inputName } from '../actions';

const mapStateToProps = (state: any) => ({
  name: state.inputName
})

const mapDispatchToProps = (dispatch: any) => ({
  inputName: (name: string) => dispatch(inputName(name)),
})

const InputName = ({ inputName, name }: any) => {
  return(
    <input
      value={name}
      onChange={(event) => inputName(event.target.value)}
    />
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InputName);
