import React from 'react';
import { connect } from 'react-redux';
import { addMemo } from '../actions';

const AddButton = ({ addMemo, inputName, inputCount } : any) => {
  return(
    <div>
      <button onClick={() => addMemo(inputName, inputCount)}>ADD</button>
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {
    inputName: state.inputName,
    inputCount: state.inputCount,
}}

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  addMemo: (inputName: string, inputCount: number) => dispatch( addMemo(inputName, inputCount) ),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddButton);