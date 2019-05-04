import React from 'react';
import { connect } from 'react-redux';
import { addMemo } from '../actions';

const AddButton = ({ addMemo } : any) => {
  return(
    <div>
      <button onClick={addMemo}>ADD</button>
    </div>
  )
}

const mapStateToProps = () => ({})
const mapDispatchToProps = (dispatch: any) => ({
  addMemo: () => dispatch(addMemo('test1', 2) ), // TODO
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddButton);