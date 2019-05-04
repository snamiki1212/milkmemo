import React from 'react';
import { connect } from 'react-redux';
import { addMemo } from '../actions';

const AddButton = ({ addMemo, inputName } : any) => {
  return(
    <div>
      <button onClick={() => addMemo(inputName)}>ADD</button>
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {
  inputName: state.inputName,
}}

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  addMemo: (inputName: string) => dispatch( addMemo(inputName, 2) ), // TODO
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddButton);