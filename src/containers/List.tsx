import React from 'react';
import { connect } from 'react-redux';
import { toggleMemo } from '../actions';

export const List = ({ list = [], handleClick }: any) => { // TODO
  return(
    <ul>
      {list.map((memo: any) => // TODO
        <li
          style={{ textDecoration: memo.finished ? 'line-through' : 'none'}}
          key={memo.id}
          onClick={() => handleClick(memo.id)}
        >
          <span>{memo.name}</span>
          {" | "}
          <span>{memo.count}</span>
        </li>
      )}
    </ul>
  )
}

const mapStateToProps = (state: any) => ({
  list: state.memoList
})

const mapDispatchToProps = (dispatch: any) => ({
  handleClick: (memoId: number) => dispatch(toggleMemo(memoId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
