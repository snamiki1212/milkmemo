import React from 'react';
import { connect } from 'react-redux';
import { addMemo, clearInput } from '../actions';

const AddButton = ({ handleClick, inputName, inputCount }: any) => {
  return(
    <div>
      <button onClick={(event) => handleClick(inputName, inputCount)}>ADD</button>
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  inputName: state.inputName,
  inputCount: state.inputCount,
})

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  handleClick: (inputName: string, inputCount: number) => {
    dispatch( addMemo(inputName, inputCount) );
    dispatch( clearInput() );
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddButton);
